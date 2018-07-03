import { GET_SCRIPT_MESSAGE } from './util';

// fetches the public API script that gets injected via inject-devtools-api.ts
// With this technique, we can cache the script here in the background process and send it when a page needs it.

(async () => {
  const scriptContent = await fetch(
    chrome.extension.getURL('./devtools-api-script.js')
  ).then(response => response.text());

  chrome.runtime.onMessage.addListener((message, _, respond) => {
    if (message === GET_SCRIPT_MESSAGE) {
      respond(scriptContent);
    }
  });
})();
