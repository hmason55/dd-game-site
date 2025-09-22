let peerConnection = null;
let dataChannel = null;
let dotNetReference = null;

const ICE_SERVERS = [
    {
        urls: [
            "stun:stun.l.google.com:19302",
            "stun:stun1.l.google.com:19302",
            "stun:stun2.l.google.com:19302",
            "stun:stun3.l.google.com:19302",
            "stun:stun4.l.google.com:19302"
        ]
    }
];

function getPeerConnectionConstructor() {
    if (typeof window === "undefined") {
        return null;
    }

    const ctor = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
    return typeof ctor === "function" ? ctor : null;
}

export function isSupported() {
    const ctor = getPeerConnectionConstructor();

    if (!ctor) {
        return false;
    }

    if (typeof window !== "undefined" && window.isSecureContext === false) {
        return false;
    }

    try {
        const connection = new ctor({ iceServers: ICE_SERVERS });
        const supportsDataChannel = typeof connection.createDataChannel === "function";
        if (typeof connection.close === "function") {
            connection.close();
        }

        return supportsDataChannel;
    } catch {
        return false;
    }
}

function createPeerConnection() {
    const ctor = getPeerConnectionConstructor();

    if (!ctor) {
        throw new Error("WebRTC is not supported in this browser or has been disabled.");
    }

    let connection;

    try {
        connection = new ctor({ iceServers: ICE_SERVERS });
    } catch (error) {
        notifyError(error?.message ?? "Failed to create a WebRTC peer connection.");
        throw error;
    }

    connection.addEventListener("connectionstatechange", () => {
        notifyState(connection.connectionState);
    });

    connection.addEventListener("iceconnectionstatechange", () => {
        notifyState(connection.connectionState);
    });

    connection.addEventListener("icecandidateerror", event => {
        const message = event.errorText ?? event.errorCode ?? "Unknown ICE candidate error";
        notifyError(`ICE candidate error: ${message}`);
    });

    connection.addEventListener("datachannel", event => {
        if (event.channel) {
            registerDataChannel(event.channel);
        }
    });

    return connection;
}

function registerDataChannel(channel) {
    cleanupDataChannel();
    dataChannel = channel;

    dataChannel.binaryType = "arraybuffer";

    dataChannel.addEventListener("open", () => {
        notifyState("connected");
    });

    dataChannel.addEventListener("close", () => {
        notifyState("disconnected");
    });

    dataChannel.addEventListener("error", event => {
        const message = event?.message ?? "Unknown data channel error";
        notifyError(message);
    });

    dataChannel.addEventListener("message", event => {
        if (!dotNetReference) {
            return;
        }

        const payload = typeof event.data === "string" ? event.data : "";
        dotNetReference.invokeMethodAsync("OnMessageReceived", payload).catch(() => {
            // Intentionally ignored.
        });
    });
}

function cleanupDataChannel() {
    if (!dataChannel) {
        return;
    }

    dataChannel.onopen = null;
    dataChannel.onclose = null;
    dataChannel.onerror = null;
    dataChannel.onmessage = null;

    try {
        dataChannel.close();
    } catch (error) {
        console.debug("Failed to close data channel", error);
    }

    dataChannel = null;
}

function cleanupConnection() {
    cleanupDataChannel();

    if (peerConnection) {
        peerConnection.onconnectionstatechange = null;
        peerConnection.oniceconnectionstatechange = null;
        peerConnection.onicecandidateerror = null;
        peerConnection.ondatachannel = null;

        try {
            peerConnection.close();
        } catch (error) {
            console.debug("Failed to close peer connection", error);
        }
    }

    peerConnection = null;
}

function notifyState(state) {
    if (!dotNetReference) {
        return;
    }

    dotNetReference.invokeMethodAsync("OnConnectionStateChanged", state ?? "").catch(() => {
        // Ignored because the .NET instance might have been disposed.
    });
}

function notifyError(message) {
    console.error("WebRTC", message);

    if (!dotNetReference) {
        return;
    }

    dotNetReference.invokeMethodAsync("OnError", String(message ?? "Unknown WebRTC error")).catch(() => {
        // The .NET side does not have to handle errors.
    });
}

function encodeDescription(description) {
    if (!description) {
        throw new Error("Missing session description.");
    }

    const payload = JSON.stringify({
        type: description.type,
        sdp: description.sdp
    });

    return btoa(payload);
}

function decodeDescription(code) {
    if (!code) {
        throw new Error("Missing session description code.");
    }

    const payload = JSON.parse(atob(code));

    if (typeof RTCSessionDescription === "function") {
        return new RTCSessionDescription(payload);
    }

    return payload;
}

function waitForIceGatheringComplete(connection) {
    if (connection.iceGatheringState === "complete") {
        return Promise.resolve(connection.localDescription);
    }

    return new Promise(resolve => {
        const checkState = () => {
            if (connection.iceGatheringState === "complete") {
                connection.removeEventListener("icegatheringstatechange", checkState);
                resolve(connection.localDescription);
            }
        };

        connection.addEventListener("icegatheringstatechange", checkState);

        // Fallback in case icegatheringstatechange never fires.
        setTimeout(() => {
            connection.removeEventListener("icegatheringstatechange", checkState);
            resolve(connection.localDescription);
        }, 2000);
    });
}

export async function createOffer(dotNetRef) {
    cleanupConnection();
    dotNetReference = dotNetRef;

    try {
        peerConnection = createPeerConnection();
    } catch (error) {
        cleanupConnection();
        throw error;
    }

    try {
        registerDataChannel(peerConnection.createDataChannel("ddgame"));
        notifyState("connecting");

        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);

        const description = await waitForIceGatheringComplete(peerConnection);
        return encodeDescription(description);
    } catch (error) {
        notifyError(error?.message ?? "Failed to create a WebRTC offer.");
        cleanupConnection();
        throw error;
    }
}

export async function acceptOffer(offerCode, dotNetRef) {
    cleanupConnection();
    dotNetReference = dotNetRef;

    try {
        peerConnection = createPeerConnection();
    } catch (error) {
        cleanupConnection();
        throw error;
    }

    try {
        const remoteDescription = decodeDescription(offerCode);
        await peerConnection.setRemoteDescription(remoteDescription);

        notifyState("connecting");

        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);

        const description = await waitForIceGatheringComplete(peerConnection);
        return encodeDescription(description);
    } catch (error) {
        notifyError(error?.message ?? "Failed to accept the WebRTC offer.");
        cleanupConnection();
        throw error;
    }
}

export async function acceptAnswer(answerCode) {
    if (!peerConnection) {
        throw new Error("Peer connection has not been created.");
    }

    try {
        const remoteDescription = decodeDescription(answerCode);
        await peerConnection.setRemoteDescription(remoteDescription);
    } catch (error) {
        notifyError(error?.message ?? "Failed to accept the WebRTC answer.");
        cleanupConnection();
        throw error;
    }
}

export function sendMessage(message) {
    if (!dataChannel || dataChannel.readyState !== "open") {
        throw new Error("Data channel is not ready.");
    }

    try {
        dataChannel.send(message ?? "");
    } catch (error) {
        notifyError(error?.message ?? "Failed to send the message over WebRTC.");
        throw error;
    }
}

export function resetConnection() {
    cleanupConnection();
    if (dotNetReference) {
        dotNetReference.invokeMethodAsync("OnConnectionStateChanged", "disconnected").catch(() => {
            // Ignore missing instance errors.
        });
    }

    dotNetReference = null;
}
