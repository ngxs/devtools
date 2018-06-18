export enum LogEntryType {
  HTTP_RESPONSE = 'HTTP_RESPONSE',
  ACTION = 'ACTION',
  EFFECT = 'EFFECT'
}

export interface BaseLogEntry {
  time: Date;
}

export interface ActionLogEntry extends BaseLogEntry {
  type: LogEntryType.ACTION;
  actionType: string;
  payload: any;
}

export interface HttpLogEntry extends BaseLogEntry {
  type: LogEntryType.HTTP_RESPONSE;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD';
  url: string;
  responseTimeMs: number;
  responseSizeKb: number;
}

export interface EffectLogEntry extends BaseLogEntry {
  type: LogEntryType.EFFECT;
  effectType: string;
}

export type LogEntry = ActionLogEntry | HttpLogEntry | EffectLogEntry;
