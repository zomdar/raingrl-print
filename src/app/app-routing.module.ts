import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
import { HomeComponent } from './home/home.component';
import { PrintingServicesComponent } from './printing-services/printing-services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScheduleAppointmentViewerComponent } from './containers/schedule-appointment-viewer/schedule-appointment-viewer.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'printing-services', component: PrintingServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'schedule-appointment', component: ScheduleAppointmentViewerComponent },
  { path: 'thank-you', component: ThankYouComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
