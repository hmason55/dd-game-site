import { ensureFirebaseInitialized, getFirestoreInstance, isBrowserEnvironment } from "./firebaseCore.mjs";
import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    onSnapshot,
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

let firestore = null;
let dotNetReference = null;
let sessionUnsubscribe = null;
let messagesUnsubscribe = null;
let currentSessionCode = null;
let localRole = null;
let lastKnownState = "disconnected";
const seenMessageIds = new Set();

const ROLE_HOST = "host";
const ROLE_GUEST = "guest";

function ensureInitialized(reference) {
    if (!isBrowserEnvironment()) {
        throw new Error("Firebase multiplayer is not available in this environment.");
    }

    if (!firestore) {
        throw new Error("Firebase has not been initialized.");
    }

    if (!reference) {
        throw new Error("A .NET reference is required to receive events.");
    }

    dotNetReference = reference;
}

function cleanupListeners() {
    if (typeof sessionUnsubscribe === "function") {
        sessionUnsubscribe();
        sessionUnsubscribe = null;
    }

    if (typeof messagesUnsubscribe === "function") {
        messagesUnsubscribe();
        messagesUnsubscribe = null;
    }

    seenMessageIds.clear();
}

function cleanupSessionState() {
    cleanupListeners();
    currentSessionCode = null;
    localRole = null;
    lastKnownState = "disconnected";
}

function notifyState(state) {
    if (!state || state === lastKnownState) {
        return;
    }

    lastKnownState = state;

    if (!dotNetReference) {
        return;
    }

    dotNetReference.invokeMethodAsync("OnConnectionStateChanged", state).catch(() => {
        /* ignored */
    });
}

function notifyMessage(message) {
    if (!dotNetReference) {
        return;
    }

    dotNetReference.invokeMethodAsync("OnMessageReceived", message).catch(() => {
        /* ignored */
    });
}

function notifyError(message) {
    if (!dotNetReference) {
        return;
    }

    dotNetReference.invokeMethodAsync("OnError", message).catch(() => {
        /* ignored */
    });
}

function generateSessionCode() {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const length = 6;
    let result = "";

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * alphabet.length);
        result += alphabet[index];
    }

    return result;
}

async function createUniqueSession() {
    const maxAttempts = 5;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const code = generateSessionCode();
        const sessionRef = doc(firestore, "sessions", code);
        const existing = await getDoc(sessionRef);
        if (!existing.exists()) {
            return { code, sessionRef };
        }
    }

    throw new Error("Failed to generate a unique session code. Please try again.");
}

function registerSessionListener(sessionRef) {
    if (typeof sessionUnsubscribe === "function") {
        sessionUnsubscribe();
    }

    sessionUnsubscribe = onSnapshot(
        sessionRef,
        snapshot => {
            if (!snapshot.exists()) {
                notifyState("disconnected");
                return;
            }

            const data = snapshot.data() ?? {};
            const hostConnected = Boolean(data.hostConnected);
            const guestConnected = Boolean(data.guestConnected);

            let targetState = "connecting";

            if (!hostConnected && !guestConnected) {
                targetState = "disconnected";
            } else if (hostConnected && guestConnected) {
                targetState = "connected";
            } else if (localRole === ROLE_GUEST && !hostConnected) {
                targetState = "failed";
            } else {
                targetState = "connecting";
            }

            notifyState(targetState);
        },
        error => {
            notifyError(error?.message ?? "Session listener error.");
            notifyState("failed");
        }
    );
}

function registerMessageListener(sessionRef) {
    if (typeof messagesUnsubscribe === "function") {
        messagesUnsubscribe();
    }

    seenMessageIds.clear();

    const messagesRef = collection(sessionRef, "messages");
    const messagesQuery = query(messagesRef, orderBy("createdAt", "asc"));

    messagesUnsubscribe = onSnapshot(
        messagesQuery,
        snapshot => {
            for (const change of snapshot.docChanges()) {
                if (change.type !== "added") {
                    continue;
                }

                const id = change.doc.id;
                if (seenMessageIds.has(id)) {
                    continue;
                }

                seenMessageIds.add(id);

                const data = change.doc.data() ?? {};
                const sender = typeof data.sender === "string" ? data.sender : "";
                const content = typeof data.content === "string" ? data.content : "";

                if (!content) {
                    continue;
                }

                if ((localRole === ROLE_HOST && sender === ROLE_HOST) || (localRole === ROLE_GUEST && sender === ROLE_GUEST)) {
                    continue;
                }

                notifyMessage(content);
            }
        },
        error => {
            notifyError(error?.message ?? "Message listener error.");
        }
    );
}

export async function initializeFirebase(config) {
    await ensureFirebaseInitialized(config);
    firestore = getFirestoreInstance();
}

export function isSupported() {
    return isBrowserEnvironment() && firestore !== null;
}

export async function createSession(reference) {
    ensureInitialized(reference);
    cleanupSessionState();

    const { code, sessionRef } = await createUniqueSession();

    await setDoc(sessionRef, {
        hostConnected: true,
        guestConnected: false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    });

    currentSessionCode = code;
    localRole = ROLE_HOST;
    notifyState("connecting");

    registerSessionListener(sessionRef);
    registerMessageListener(sessionRef);

    return code;
}

export async function joinSession(sessionCode, reference) {
    ensureInitialized(reference);
    cleanupSessionState();

    const sanitizedCode = typeof sessionCode === "string" ? sessionCode.trim().toUpperCase() : "";

    if (!sanitizedCode) {
        throw new Error("Session code cannot be empty.");
    }

    const sessionRef = doc(firestore, "sessions", sanitizedCode);
    const snapshot = await getDoc(sessionRef);

    if (!snapshot.exists()) {
        throw new Error("Session not found. Check the code and try again.");
    }

    await updateDoc(sessionRef, {
        guestConnected: true,
        updatedAt: serverTimestamp()
    });

    currentSessionCode = sanitizedCode;
    localRole = ROLE_GUEST;
    notifyState("connecting");

    registerSessionListener(sessionRef);
    registerMessageListener(sessionRef);
}

export async function sendMessage(message) {
    if (!currentSessionCode || !firestore) {
        throw new Error("No active session.");
    }

    const content = typeof message === "string" ? message.trim() : "";
    if (!content) {
        return;
    }

    const sessionRef = doc(firestore, "sessions", currentSessionCode);
    const messagesRef = collection(sessionRef, "messages");

    await addDoc(messagesRef, {
        content,
        sender: localRole ?? "unknown",
        createdAt: serverTimestamp()
    });
}

export async function leaveSession() {
    if (!currentSessionCode || !firestore) {
        cleanupSessionState();
        notifyState("disconnected");
        return;
    }

    const sessionRef = doc(firestore, "sessions", currentSessionCode);

    const updates = {
        updatedAt: serverTimestamp()
    };

    if (localRole === ROLE_HOST) {
        updates.hostConnected = false;
    } else if (localRole === ROLE_GUEST) {
        updates.guestConnected = false;
    }

    try {
        await updateDoc(sessionRef, updates);
    } catch (error) {
        console.debug("Failed to update session status", error);
    }

    cleanupSessionState();
    notifyState("disconnected");
}
