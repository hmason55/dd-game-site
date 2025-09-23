import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics, isSupported as isAnalyticsSupported } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-storage.js";

let firebaseApp = null;
let firestore = null;
let auth = null;
let storage = null;
let analyticsInitialized = false;

const REQUIRED_CONFIG_KEYS = ["apiKey", "authDomain", "projectId", "appId"];

export function isBrowserEnvironment() {
    return typeof window !== "undefined";
}

export function sanitizeConfig(config) {
    if (!config || typeof config !== "object") {
        throw new Error("Firebase configuration is missing.");
    }

    const normalized = {};

    for (const key of Object.keys(config)) {
        const value = config[key];
        if (typeof value === "string") {
            const trimmed = value.trim();
            if (trimmed.length > 0) {
                normalized[key] = trimmed;
            }
        }
    }

    for (const requiredKey of REQUIRED_CONFIG_KEYS) {
        if (!normalized[requiredKey]) {
            throw new Error(`Firebase configuration is missing '${requiredKey}'.`);
        }
    }

    return normalized;
}

export async function ensureFirebaseInitialized(config) {
    if (!isBrowserEnvironment()) {
        throw new Error("Firebase is not available in this environment.");
    }

    if (firebaseApp) {
        return;
    }

    const sanitized = sanitizeConfig(config);

    if (getApps().length > 0) {
        firebaseApp = getApp();
    } else {
        firebaseApp = initializeApp(sanitized);
    }

    firestore = getFirestore(firebaseApp);
    auth = getAuth(firebaseApp);
    storage = getStorage(firebaseApp);

    try {
        if (!analyticsInitialized && (await isAnalyticsSupported())) {
            getAnalytics(firebaseApp);
            analyticsInitialized = true;
        }
    } catch (error) {
        console.debug("Analytics initialization failed", error);
    }
}

export function getFirestoreInstance() {
    if (!firestore) {
        throw new Error("Firebase has not been initialized.");
    }

    return firestore;
}

export function getAuthInstance() {
    if (!auth) {
        throw new Error("Firebase has not been initialized.");
    }

    return auth;
}

export function getStorageInstance() {
    if (!storage) {
        throw new Error("Firebase has not been initialized.");
    }

    return storage;
}

