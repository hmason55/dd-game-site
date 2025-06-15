window.copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch(err => console.error('Copy failed', err));
};

window.pasteFromClipboard = async () => {
    try {
        return await navigator.clipboard.readText();
    } catch (err) {
        console.error('Paste failed', err);
        return '';
    }
};
