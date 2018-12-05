import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

import { Router } from "@angular/router";

import { Customer } from '../../models/customer.interface';

@Component({
  selector: 'app-schedule-appointment-viewer',
  templateUrl: './schedule-appointment-viewer.component.html',
  styleUrls: ['./schedule-appointment-viewer.component.css']
})
export class ScheduleAppointmentViewerComponent implements OnInit {

  customer: Customer;
  _db:AngularFirestore;

  public customers: Observable<any[]>;

  constructor(db: AngularFirestore, private router: Router) {
      this.customers = db.collection('/customers').valueChanges();
      this._db = db;
  }

  ngOnInit() {

  }

  onUpdateCustomer(event: Customer) {

    // add the customer model back after the collection like this collection<Customer> once i get productionEndDate working
    let customerCollection = this._db.collection('/customers');
    customerCollection.add(
                            {  
                              firstName: event.firstName, 
                              lastName: event.lastName,  
                              emailAddress: event.emailAddress, 
                              message: event.message
                              // productEndDate: productEndDateObject
                            }
                          )
    // put this to happen on success or something after the add..
    this.router.navigate(['/thank-you']);    
  }

}
