/**
 * Inserts a script on the page and removes it directly after.
 * With this method, we don't pollute the DOM inspector with extension scripts.
 */
export function injectScript(content, doc: Document, remove = true) {
  const script = doc.createElement('script');
  script.textContent = content;
  doc.documentElement.appendChild(script);
  if (remove) {
    script.parentNode.removeChild(script);
  }
}
