import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAppointmentViewerComponent } from './schedule-appointment-viewer.component';

describe('ScheduleAppointmentViewerComponent', () => {
  let component: ScheduleAppointmentViewerComponent;
  let fixture: ComponentFixture<ScheduleAppointmentViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleAppointmentViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAppointmentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
