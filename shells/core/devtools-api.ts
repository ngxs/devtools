import { Observable, of } from 'rxjs';
import { fromEvent } from 'rxjs';
import { filter, first } from 'rxjs/operators';

// TODO: define all possible debug message types (ACTION, HTTP_RESPONSE, ...)
export interface DebugMessage {
  type: 'ACTION';
}

export interface NgxsInstance {
  details: NgxsInstanceDetails;
  _internalInstanceId: number;

  // idea: with this we can send commands to the NGXS from the NGXS Devtools
  commandStream(): Observable<any>;
  deregister();
}

// These are the provided information by the NgxsDevtoolsPlugin.
export interface NgxsInstanceDetails {
  name: string;
  ngxsVersion: string;
  debugStream(): Observable<DebugMessage>;
}

// TODO: we need to figure out how we can provide this interface to the NgxsDevtoolsPluginModule.
export interface DevtoolsAPI {
  registerInstance(instance: NgxsInstanceDetails);
}

export abstract class BaseDevtoolsAPI {
  protected registeredInstances = new Map<number, NgxsInstance>();
  private _nextInstanceId = 0;

  constructor(protected _window: Window) {
    this._setupInitListener();
  }

  abstract _onInit();

  registerInstance(details: NgxsInstanceDetails) {
    this.registeredInstances.set(this._nextInstanceId, {
      details,
      _internalInstanceId: this._nextInstanceId,
      commandStream: () => of(null),
      deregister: () => {}
    });
    this._nextInstanceId += 1;
  }

  private _setupInitListener() {
    fromEvent(this._window, 'message')
      .pipe(
        filter<MessageEvent>(event => this._isRelevantMessage(event)),
        filter(event => event.data.messageType === 'ngxs-devtools-init'),
        first()
      )
      .subscribe(() => this._onInit());
  }

  private _isRelevantMessage(event: MessageEvent): boolean {
    return (
      this._messageDataIsObject(event) &&
      event.target === window &&
      event.data.target === 'ngxs-devtools'
    );
  }

  private _messageDataIsObject(message: MessageEvent): boolean {
    return Object(message.data) === message.data;
  }
}

/**
 * Injects the API as a global window attribute and informs all that the API is ready to call.
 */
export function injectGlobalAPI(w: Window, api: DevtoolsAPI) {
  (w as any)['__NGXS_DEVTOOLS__'] = api;
  w.postMessage('ngxs-devtools/api-ready', '*');
}
