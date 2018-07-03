import { injectScript } from '../core/util';
import { GET_SCRIPT_MESSAGE } from './util';
import { CommunicationBridge } from './bridge';

// Injects the main script (public API of the devtools) when the NgxsDevtoolsPlugin sends a message on the window.
// We don't use RXJS or any other libs here because it would slow down every page visit of the browser.
// With this technique, we keep the user site as fast as possible.
// The main script gets sent by the background.ts.

const messageHandler = (message: MessageEvent) => {
  if (message.data === 'ngxs-devtools/ngxs-on-page') {
    window.removeEventListener('message', messageHandler);
    chrome.runtime.sendMessage(GET_SCRIPT_MESSAGE, function(scriptContent) {
      injectScript(scriptContent, document, false);
      const bridge = new CommunicationBridge(
        window,
        chrome.runtime.connect({ name: 'ngxs-devtools' })
      );
    });
  }
};

window.addEventListener('message', messageHandler);
