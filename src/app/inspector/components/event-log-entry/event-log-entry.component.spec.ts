import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLogEntryComponent } from './event-log-entry.component';

describe('EventLogEntryComponent', () => {
  let component: EventLogEntryComponent;
  let fixture: ComponentFixture<EventLogEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventLogEntryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
