import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';

// containers
import { ScheduleAppointmentViewerComponent } from './containers/schedule-appointment-viewer/schedule-appointment-viewer.component';

// components
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrintingServicesComponent } from './printing-services/printing-services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


@NgModule({
  declarations: [
    AppComponent,
    PrintingServicesComponent,
    GalleryComponent,
    ScheduleAppointmentComponent,
    HomeComponent,
    ScheduleAppointmentViewerComponent,
    ThankYouComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule,
    BrowserModule,
    UiModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
