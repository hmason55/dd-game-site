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
