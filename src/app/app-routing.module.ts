import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from "./modules/start/start.component";
import { AllRoomsComponent } from './modules/all-rooms/all-rooms.component';
import { FindRoomsComponent } from './modules/find-rooms/find-rooms.component';
import { RoomCalendarComponent } from './modules/room-calendar/room-calendar.component';


const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'all-rooms',
    component: AllRoomsComponent
  },
  {
    path: 'find-rooms',
    component: FindRoomsComponent
  },
  {
    path: 'all-rooms/room-calendar/:roomLabel',
    component: RoomCalendarComponent
  },
  {
    path: 'find-rooms/room-calendar/:roomLabel',
    component: RoomCalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
