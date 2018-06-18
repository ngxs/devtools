import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { LogEntry, LogEntryType } from '../../models/event-log.model';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { SetInspectedLogEntry } from '../../state/actions/event-log.actions';

@Component({
  selector: 'ngxs-event-log-entry',
  templateUrl: './event-log-entry.component.html',
  styleUrls: ['./event-log-entry.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventLogEntryComponent {
  @Input() logEntry: LogEntry;

  constructor(private store: Store) {}

  /**
   * @internal
   */
  getIcon(): string {
    switch (this.logEntry.type) {
      case LogEntryType.ACTION:
        return 'notifications';
      case LogEntryType.HTTP_RESPONSE:
        return 'swap_vert';
    }
  }

  /**
   * @internal
   */
  inspect() {
    this.store.dispatch(new SetInspectedLogEntry(this.logEntry));
  }

  /**
   * @internal
   */
  isActionType(): boolean {
    return this.logEntry.type === LogEntryType.ACTION;
  }

  /**
   * @internal
   */
  isHttpResponseType(): boolean {
    return this.logEntry.type === LogEntryType.HTTP_RESPONSE;
  }
}
