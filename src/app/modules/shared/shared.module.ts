import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';



import { StartComponent } from "../start/start.component";
import { AllRoomsComponent } from '../all-rooms/all-rooms.component';
import { FindRoomsComponent } from '../find-rooms/find-rooms.component';
import { RoomCalendarComponent } from '../room-calendar/room-calendar.component';
import { NewReservationComponent } from '../new-reservation/new-reservation.component';
import { UpdateReservationComponent } from '../update-reservation/update-reservation.component';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { AdminComponent } from '../admin/admin.component';


import { FullCalendarModule} from '@fullcalendar/angular'; // the main connector. must go first
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  timeGridPlugin,
  interactionPlugin
]);

const SHARED_MODULES = [
  CommonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatDialogModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  FullCalendarModule,
  MatCheckboxModule
];

const SHARED_COMPONENTS = [
  StartComponent, 
  AllRoomsComponent, 
  FindRoomsComponent, 
  RoomCalendarComponent, 
  NewReservationComponent, 
  UpdateReservationComponent, 
  MatConfirmDialogComponent,
  AdminComponent
];

@NgModule({
  imports: [...SHARED_MODULES],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS]
})
export class SharedModule {}
