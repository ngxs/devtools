import { BaseDevtoolsAPI } from '../core/devtools-api';

export class ChromeDevtoolsAPI extends BaseDevtoolsAPI {
  constructor(_window: Window) {
    super(_window);
  }

  /**
   * @internal
   */
  _onInit() {
    console.log('initialized');
  }
}
