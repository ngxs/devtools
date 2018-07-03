import { Observable } from 'rxjs';

// WIP
export class CommunicationBridge {
  constructor(private _window: Window, private _port: chrome.runtime.Port) {
    this._windowToPort();
    this._portToWindow();
  }

  private _windowToPort() {}

  private _portToWindow() {
    this._listenPortMessages().subscribe(m => {
      this._window.postMessage(m, '*');
    });
  }

  private _listenPortMessages(): Observable<any> {
    return new Observable(observer => {
      const listener = (message: any) => {
        observer.next(message);
      };
      this._port.onMessage.addListener(listener);
      return () => {
        this._port.onMessage.removeListener(listener);
      };
    });
  }
}
