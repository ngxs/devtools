import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLogEntryDetailsComponent } from './event-log-entry-details.component';

describe('EventLogEntryDetailsComponent', () => {
  let component: EventLogEntryDetailsComponent;
  let fixture: ComponentFixture<EventLogEntryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventLogEntryDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLogEntryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
