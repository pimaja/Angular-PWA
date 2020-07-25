import { Component, OnInit } from '@angular/core';
import { DataService } from "../core/data.service" 


@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.scss']
})
export class AllRoomsComponent implements OnInit {
  rooms_capacities = new Map();

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.getAllRoomsAndCapacity().then( x => {
      this.rooms_capacities = x;
    });
  }
}
