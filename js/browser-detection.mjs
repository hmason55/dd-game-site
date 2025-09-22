const BRAVE_VENDOR_NAME = "";

export async function detectScriptBlocking() {
    const result = {
        IsBrave: false,
        ScriptBlockingLikely: false
    };

    try {
        result.IsBrave = await isBraveBrowser();
    } catch (error) {
        console.warn("Brave browser detection threw an unexpected error", error);
        result.IsBrave = true;
    }

    try {
        const response = await fetch("./_framework/blazor.webassembly.js", { method: "GET", cache: "no-store" });
        if (!response || !response.ok) {
            result.ScriptBlockingLikely = true;
        }
    } catch (error) {
        console.warn("Fetch check for Blazor framework script failed", error);
        result.ScriptBlockingLikely = true;
    }

    return result;
}

async function isBraveBrowser() {
    if (typeof navigator === "undefined") {
        return false;
    }

    const nav = navigator;

    if (nav.brave && typeof nav.brave.isBrave === "function") {
        try {
            return await nav.brave.isBrave();
        } catch (error) {
            // Brave may throw if Shields are aggressively blocking script access.
            console.warn("Brave browser detection via navigator.brave failed", error);
            return true;
        }
    }

    const userAgent = (nav.userAgent || "").toLowerCase();
    const vendor = (nav.vendor || "").toLowerCase();

    if (vendor === BRAVE_VENDOR_NAME && userAgent.includes("chrome")) {
        return true;
    }

    if (userAgent.includes("brave")) {
        return true;
    }

    if (nav.userAgentData && Array.isArray(nav.userAgentData.brands)) {
        const brands = nav.userAgentData.brands.map((b) => (b.brand || "").toLowerCase());
        if (brands.some((brand) => brand.includes("brave"))) {
            return true;
        }
    }

    return false;
}
