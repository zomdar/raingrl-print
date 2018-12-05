import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { Customer } from '../../models/customer.interface';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {

  faCalendarAlt = faCalendarAlt;

  @Input()
  customerDetail: Customer;

  @Output()
  update: EventEmitter<Customer> = new EventEmitter<Customer>();

  toggleCustomerDetail(checkedIn: boolean) {
    
  }

  handleSubmit(customer: Customer, isValid: boolean) {
    if(isValid) {
      this.update.emit(customer);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
