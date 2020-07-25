import { Component, OnInit } from '@angular/core';
import { DataService } from "../core/data.service";

import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { MatDialog } from '@angular/material/dialog';
import { NewReservationComponent } from '../new-reservation/new-reservation.component';
import { UpdateReservationComponent } from '../update-reservation/update-reservation.component';



@Component({
  selector: 'app-room-calendar',
  templateUrl: './room-calendar.component.html',
  styleUrls: ['./room-calendar.component.scss']
})
export class RoomCalendarComponent implements OnInit {
  room;
  events;
  loadCalendar = true;

  calendarOptions : CalendarOptions = {
    initialView: 'timeGridWeek',
    editable: true,
    selectable: true,
    eventClick: this.handleDateClick.bind(this), 
    select: this.handleDateSelect.bind(this), 
    weekends: false,
    firstDay: 1,
    locale: 'hr',
    slotLabelFormat:{
      hour: 'numeric',
      minute: '2-digit'
    },
    slotDuration: '00:30:00',
    slotMinTime: '08:00:00',
    slotMaxTime: '20:00:00',
    height: "auto",
    buttonText:{
      today: 'danas'
    },
    eventColor: "#FFD740",
    eventTextColor: "black",
    headerToolbar: {
      start: '',
      center: '',
      end: 'today prev,next'
    },
    dayHeaderFormat: { weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', omitCommas: true},
    allDaySlot: false
    //displayEventTime: false
  };

  loadEvents(){
    // get events from Parse Server and send them like events to FullCalendar
    this.data.getAllEventsForRoom(this.room).then( x => {
      this.loadCalendar = false;
      this.calendarOptions.events = x;
    });
  }
  
  handleDateSelect(arg) {
    this.dialog.open(NewReservationComponent, {
      data: { room: this.room, startStr: arg.startStr, endStr: arg.endStr }
    }).afterClosed().subscribe(() => { this.loadEvents(); } );
  }

  handleDateClick(arg){
    this.dialog.open(UpdateReservationComponent, {
      data: { room: this.room, title:arg.event.title, start: arg.event.start, end: arg.event.end }
    }).afterClosed().subscribe(() => { this.loadEvents(); } );
  }

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.room = params.get('roomLabel');
    });

    this.loadEvents();

  }

}
