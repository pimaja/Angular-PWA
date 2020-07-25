import { Component, OnInit } from '@angular/core';
import { DataService } from "../core/data.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss'],
})
export class NewReservationComponent implements OnInit {
  condition = true;
  errorMessage;

  room = this.data.room;
  startDate = this.data.startStr.toString().split('T')[0];
  startTime = this.data.startStr.toString().split('T')[1].split('+')[0].split(':')[0] 
    + ":" + this.data.startStr.toString().split('T')[1].split('+')[0].split(':')[1];
  endDate = this.data.endStr.toString().split('T')[0];
  endTime = this.data.endStr.toString().split('T')[1].split('+')[0].split(':')[0] 
  + ":" + this.data.endStr.toString().split('T')[1].split('+')[0].split(':')[1];
  wholeSemester = "no";


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _adapter: DateAdapter<any>,
    private dataService: DataService,
    public dialogRef: MatDialogRef<NewReservationComponent>
  ) { }
  
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl(''),
    person: new FormControl('', Validators.required),
    startDate: new FormControl(this.startDate, Validators.required),
    startTime: new FormControl(this.startTime, Validators.pattern('(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]')),
    endDate: new FormControl(this.endDate, Validators.required),
    endTime: new FormControl(this.endTime, Validators.pattern('(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]')),
    whole_semester: new FormControl("2")
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      title: '',
      person: '',
      startDate: this.startDate,
      startTime: this.startTime,
      endDate: this.endDate,
      endTime: this.endTime,
      whole_semester: "2"
    });
  }

  ngOnInit(): void {
    this._adapter.setLocale('hr');
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }

  onSave(){
    // show progress bar while saving
    this.condition = false;

    // transform whole_semester in format ready to save in database
    if(this.form.value.whole_semester == "1")
      this.wholeSemester = "yes";
    else this.wholeSemester = "no";

    this.dataService.saveNewReservation(this.room, this.form.value.title, this.form.value.person, this.form.value.startDate, 
      this.form.value.startTime, this.form.value.endDate, this.form.value.endTime, this.wholeSemester)
    .then((message)=>{
      if(message != null){
        this.errorMessage = message;
      }
      else{
        // close after saving
        this.dialogRef.close();
      }
    });
  }

}
