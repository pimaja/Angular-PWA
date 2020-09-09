import { Component, OnInit } from '@angular/core';
import { DataService } from "../core/data.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-find-rooms',
  templateUrl: './find-rooms.component.html',
  styleUrls: ['./find-rooms.component.scss']
})
export class FindRoomsComponent implements OnInit {
  showRooms = false;
  condition = true;
  rooms_capacities = new Map();
  startDate = new Date();

  constructor(
    private dataService: DataService,
    private _adapter: DateAdapter<any>
  ) { }

  ngOnInit(): void {
    this._adapter.setLocale('hr');
    this.form.valueChanges.subscribe(res=>{
      this.startDate = new Date(this.form.value.startDate);
    })
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    startDate: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.pattern('(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]')),
    endDate: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.pattern('(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]')),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      startDate: '',
      startTime: '',
      endDate: this.startDate,
      endTime: ''
    });
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }

  onClick(){
    this.condition = false;
    
    this.dataService.findFreeRooms(this.form.value.startDate, this.form.value.startTime, 
      this.form.value.endDate, this.form.value.endTime)
    .then((available) => {
      // display available rooms as buttons
      this.rooms_capacities = available;
      this.showRooms = true;
    });
  }

}
