/** Saves a generated text document or Blazor byte array in the browser. */
export function download(name, contentType, content) {
    const url = URL.createObjectURL(new Blob([content], { type: contentType }));
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Reads the selected draft ID and the individual working copies belonging to this editor. */
export function loadWorkingCopies(key) {
    const drafts = [sessionStorage.getItem(key + "active")];
    for (let index = 0; index < localStorage.length; index++) {
        const name = localStorage.key(index);
        if (name?.startsWith(key + "draft.")) drafts.push(localStorage.getItem(name));
    }
    return drafts;
}

let scrollTimer;
let activeSectionKey;

/** Saves changed documents and restores the selected document's position when switching. */
export function saveWorkingCopies(key, drafts, activeId) {
    for (const [id, document] of drafts) localStorage.setItem(key + "draft." + id, document);
    sessionStorage.setItem(key + "active", activeId);
    const nextSectionKey = key + "scroll." + activeId;
    if (activeSectionKey === nextSectionKey) return;
    clearTimeout(scrollTimer);
    if (activeSectionKey) sessionStorage.setItem(activeSectionKey, String(window.scrollY));
    else window.addEventListener("scroll", rememberWorkingSection, { passive: true });
    activeSectionKey = nextSectionKey;
    const position = Number(sessionStorage.getItem(nextSectionKey));
    requestAnimationFrame(() => window.scrollTo(0, position));
}

function rememberWorkingSection() {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        try { sessionStorage.setItem(activeSectionKey, String(window.scrollY)); }
        catch { /* Document recovery remains independent of scroll position. */ }
    }, 100);
}
