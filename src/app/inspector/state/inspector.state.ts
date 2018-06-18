import { State, Action, StateContext } from '@ngxs/store';
import { LogEntry, LogEntryType } from '../models/event-log.model';
import {
  AddEventLogEntry,
  StartRecording,
  PauseRecording,
  SetInspectedLogEntry
} from './actions/event-log.actions';

export interface InspectorStateModel {
  logEntries?: LogEntry[];
  inspectedLogEntry: LogEntry | null;
  recording: boolean;
  connectingToNgxs: boolean; // when true, the devtools waiting for the existence of NGXS on the current site
  detectedNgxsVersion: string | null;
}

export const STATE_NAME = 'inspector';

@State<InspectorStateModel>({
  name: STATE_NAME,
  defaults: {
    connectingToNgxs: true,
    detectedNgxsVersion: null,
    logEntries: [],
    inspectedLogEntry: null,
    recording: true
  }
})
export class InspectorState {
  @Action(AddEventLogEntry)
  addEventLogEntry(
    ctx: StateContext<InspectorStateModel>,
    action: AddEventLogEntry
  ) {
    const state = ctx.getState();
    if (!state.recording) {
      return;
    }
    return ctx.patchState({
      logEntries: [action.payload, ...state.logEntries]
    });
  }

  @Action(StartRecording)
  startRecording(
    ctx: StateContext<InspectorStateModel>,
    action: StartRecording
  ) {
    ctx.patchState({ recording: true });
  }

  @Action(SetInspectedLogEntry)
  setInspectedLogEntry(
    ctx: StateContext<InspectorStateModel>,
    action: SetInspectedLogEntry
  ) {
    ctx.patchState({ inspectedLogEntry: action.payload });
  }

  @Action(PauseRecording)
  pauseRecording(
    ctx: StateContext<InspectorStateModel>,
    action: StartRecording
  ) {
    ctx.patchState({ recording: false });
  }
}
