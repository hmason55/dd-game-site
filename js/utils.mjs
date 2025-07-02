export function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(err => console.error('Copy failed', err));
}

export async function pasteFromClipboard() {
    try {
        return await navigator.clipboard.readText();
    } catch (err) {
        console.error('Paste failed', err);
        return '';
    }
}
