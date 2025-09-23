import { ensureFirebaseInitialized, getAuthInstance, getStorageInstance, isBrowserEnvironment, sanitizeConfig } from "./firebaseCore.mjs";
import { GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { ref, uploadBytes, getMetadata, getBytes } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-storage.js";

let dotNetReference = null;
let authUnsubscribe = null;
let currentConfig = null;

const SAVE_FOLDER = "users";
const SAVE_FILE = "latest_save.msgpack";

function ensureConfigured() {
    if (!isBrowserEnvironment()) {
        throw new Error("Firebase cloud saves are not available in this environment.");
    }

    if (!currentConfig) {
        throw new Error("Firebase has not been configured.");
    }
}

function getUserPath(userId) {
    if (!userId) {
        throw new Error("A signed-in user is required to access cloud saves.");
    }

    return `${SAVE_FOLDER}/${userId}/${SAVE_FILE}`;
}

function isMissingSaveError(error) {
    if (!error || typeof error.code !== "string") {
        return false;
    }

    switch (error.code) {
        case "storage/object-not-found":
        case "storage/unauthorized":
        case "storage/permission-denied":
            return true;
        default:
            return false;
    }
}

function notifyAuthState(user) {
    if (!dotNetReference) {
        return;
    }

    dotNetReference.invokeMethodAsync("OnAuthStateChanged", user ?? null).catch(() => {
        /* ignored */
    });
}

export async function configure(config, reference) {
    if (!reference) {
        throw new Error("A .NET reference is required to receive authentication updates.");
    }

    const sanitized = sanitizeConfig(config);
    await ensureFirebaseInitialized(sanitized);

    currentConfig = sanitized;
    dotNetReference = reference;

    const auth = getAuthInstance();

    if (typeof authUnsubscribe === "function") {
        authUnsubscribe();
    }

    authUnsubscribe = onAuthStateChanged(auth, user => {
        if (!user) {
            notifyAuthState(null);
            return;
        }

        notifyAuthState({
            userId: user.uid,
            displayName: user.displayName ?? null,
            email: user.email ?? null
        });
    });
}

export function isSupported() {
    return isBrowserEnvironment();
}

export async function signInWithGoogle() {
    ensureConfigured();

    const auth = getAuthInstance();
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);
    const user = result?.user;

    if (!user) {
        return null;
    }

    const payload = {
        userId: user.uid,
        displayName: user.displayName ?? null,
        email: user.email ?? null
    };

    notifyAuthState(payload);
    return payload;
}

export async function signOut() {
    ensureConfigured();

    const auth = getAuthInstance();
    await firebaseSignOut(auth);
    notifyAuthState(null);
}

export async function getLatestSaveMetadata() {
    ensureConfigured();

    const auth = getAuthInstance();
    const user = auth.currentUser;

    if (!user) {
        return null;
    }

    const storage = getStorageInstance();
    const path = getUserPath(user.uid);
    const saveRef = ref(storage, path);

    try {
        const metadata = await getMetadata(saveRef);
        return {
            updatedAt: metadata?.updated ? new Date(metadata.updated).toISOString() : null,
            sizeBytes: typeof metadata?.size === "number" ? metadata.size : null
        };
    } catch (error) {
        if (isMissingSaveError(error)) {
            return null;
        }

        throw error;
    }
}

export async function downloadLatestSave() {
    ensureConfigured();

    const auth = getAuthInstance();
    const user = auth.currentUser;

    if (!user) {
        throw new Error("You must be signed in to download a cloud save.");
    }

    const storage = getStorageInstance();
    const path = getUserPath(user.uid);
    const saveRef = ref(storage, path);

    try {
        const bytes = await getBytes(saveRef);
        return bytes;
    } catch (error) {
        if (isMissingSaveError(error)) {
            return null;
        }

        throw error;
    }
}

export async function uploadLatestSave(payload) {
    ensureConfigured();

    if (!(payload instanceof Uint8Array) && !(payload instanceof ArrayBuffer)) {
        throw new Error("Cloud save payload must be binary data.");
    }

    const auth = getAuthInstance();
    const user = auth.currentUser;

    if (!user) {
        throw new Error("You must be signed in to upload a cloud save.");
    }

    const storage = getStorageInstance();
    const path = getUserPath(user.uid);
    const saveRef = ref(storage, path);

    const buffer = payload instanceof Uint8Array ? payload : new Uint8Array(payload);

    await uploadBytes(saveRef, buffer, {
        contentType: "application/octet-stream",
        cacheControl: "no-store"
    });
}

export function dispose() {
    if (typeof authUnsubscribe === "function") {
        authUnsubscribe();
        authUnsubscribe = null;
    }

    dotNetReference = null;
}
