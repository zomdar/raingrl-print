import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingServicesComponent } from './printing-services.component';

describe('PrintingServicesComponent', () => {
  let component: PrintingServicesComponent;
  let fixture: ComponentFixture<PrintingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
