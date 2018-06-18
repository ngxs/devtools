import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InspectorStateModel, STATE_NAME } from '../../state/inspector.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LogEntry } from '../../models/event-log.model';

@Component({
  selector: 'ngxs-event-log-entry-details',
  templateUrl: './event-log-entry-details.component.html',
  styleUrls: ['./event-log-entry-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventLogEntryDetailsComponent {
  @Select(
    (state: { [STATE_NAME]: InspectorStateModel }) =>
      state.inspector.inspectedLogEntry
  )
  readonly logEntry$: Observable<LogEntry>;
}
