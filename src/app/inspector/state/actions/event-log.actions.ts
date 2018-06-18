import { LogEntry } from '../../models/event-log.model';

export class AddEventLogEntry {
  static readonly type = '[EventLog] Add event log entry';
  constructor(public readonly payload: LogEntry) {}
}

export class SetInspectedLogEntry {
  static readonly type = '[EventLog] Set inspected log entry';
  constructor(public readonly payload: LogEntry) {}
}

export class StartRecording {
  static readonly type = '[EventLog] Start recording';
}

export class PauseRecording {
  static readonly type = '[EventLog] Pause recording';
}
