import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';

import {
  transition,
  animate,
  style,
  trigger,
  query,
  stagger
} from '@angular/animations';
import { Store, Select } from '@ngxs/store';
import {
  InspectorStateModel,
  STATE_NAME
} from '../../state/inspector.state';
import {
  LogEntry,
  ActionLogEntry,
  LogEntryType,
  HttpLogEntry
} from '../../models/event-log.model';
import { Observable } from 'rxjs';
import { AddEventLogEntry } from '../../state/actions/event-log.actions';

@Component({
  selector: 'ngxs-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          style({ transform: 'translateY(-30px)', opacity: 0, height: 0 }),
          { optional: true }
        ),
        query(
          ':enter',
          stagger('150ms', [
            animate(
              '200ms cubic-bezier(0.4, 0, 0.25, 1)',
              style({
                transform: 'translateY(0px)',
                opacity: 1,
                height: '*',
                overflow: '*'
              })
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class EventLogComponent implements OnDestroy {
  @Select(
    (state: { [STATE_NAME]: InspectorStateModel }) => state.inspector.logEntries
  )
  readonly logEntries$: Observable<LogEntry[]>;

  private interval: number;

  constructor(store: Store) {
    // create dummy data here...
    setInterval(() => {
      const entry: ActionLogEntry = {
        type: LogEntryType.ACTION,
        actionType: '[Dummy] MySuperAction',
        payload: {
          abc: 'def'
        },
        time: new Date()
      };

      store.dispatch(new AddEventLogEntry(entry));
    }, 2000);

    setInterval(() => {
      const entry: HttpLogEntry = {
        type: LogEntryType.HTTP_RESPONSE,
        method: 'GET',
        responseSizeKb: 32,
        responseTimeMs: 40,
        time: new Date(),
        url: 'https://www.google.com'
      };

      store.dispatch(new AddEventLogEntry(entry));
    }, 3500);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
