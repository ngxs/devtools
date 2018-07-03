// This is the script file that gets inserted as an inline script tag
// for a short period of time. It has to be self contained (bring all deps).

import { injectGlobalAPI } from '../core/devtools-api';
import { ChromeDevtoolsAPI } from './devtools-api';

injectGlobalAPI(window, new ChromeDevtoolsAPI(window));
