import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectorRoutingModule } from './inspector-routing.module';
import { EventLogEntryComponent } from './components/event-log-entry/event-log-entry.component';
import { EventLogComponent } from './components/event-log/event-log.component';
import { InspectorComponent } from './components/inspector/inspector.component';
import { NgxsModule } from '@ngxs/store';
import { InspectorState } from './state/inspector.state';
import { EventLogEntryDetailsComponent } from './components/event-log-entry-details/event-log-entry-details.component';

@NgModule({
  imports: [
    CommonModule,
    InspectorRoutingModule,
    NgxsModule.forFeature([InspectorState])
  ],
  declarations: [
    EventLogEntryComponent,
    EventLogComponent,
    InspectorComponent,
    EventLogEntryDetailsComponent
  ]
})
export class InspectorModule {}
