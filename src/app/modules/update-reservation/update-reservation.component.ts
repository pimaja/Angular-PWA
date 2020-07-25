import { Component, OnInit } from '@angular/core';
import { DataService } from "../core/data.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import * as moment from 'moment';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from "../mat-confirm-dialog/mat-confirm-dialog.component";


@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})
export class UpdateReservationComponent implements OnInit {
  updateReservationForm;
  conditionLoad = true;

  room = this.data.room;
  // title and person on calendar is saved in one string "title"
  title = this.data.title.split('\n')[0];
  person = this.data.title.split('\n')[1];
  wholeSemester = "no";

  //this.data.start je sljedećeg formata: MMM DD YYYY HH:MM:SS GMT+0200
  splittedStart = this.data.start.toString().split(' ');
  splittedEnd = this.data.end.toString().split(' ');
  startTime = this.splittedStart[4].split(':')[0] + ":" + this.splittedStart[4].split(':')[1];
  dstartDate = this.splittedStart[2] + ' ' + this.splittedStart[1] + ' ' + this.splittedStart[3];
  endTime = this.splittedEnd[4].split(':')[0] + ":" + this.splittedEnd[4].split(':')[1];;
  dendDate = this.splittedEnd[2] + ' ' + this.splittedEnd[1] + ' ' + this.splittedEnd[3];

  startDate = moment(this.dstartDate, 'DD MMM YYYY').format('YYYY-MM-DD');
  endDate = moment(this.dendDate, 'DD MMM YYYY').format('YYYY-MM-DD');

  condition: boolean;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _adapter: DateAdapter<any>,
    private dataService: DataService,
    public dialogRef: MatDialogRef<UpdateReservationComponent>,
    private dialog: MatDialog
  ) { }
  

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl(this.title),
    person: new FormControl(this.person, Validators.required),
    startDate: new FormControl(this.startDate, Validators.required),
    startTime: new FormControl(this.startTime, Validators.pattern('(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]')),
    endDate: new FormControl(this.endDate, Validators.required),
    endTime: new FormControl(this.endTime, Validators.pattern('(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]')),
  });


  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      title: this.title,
      person: this.person,
      startDate: this.startDate,
      startTime: this.startTime,
      endDate: this.endDate,
      endTime: this.endTime
    });
  }


  ngOnInit(): void {
    this._adapter.setLocale('hr');

    // fetch whole_semester value from database, beacause it's not saved in event arguments
    this.dataService.getWholeSemesterValue(this.room, this.title, this.person, this.startDate, this.startTime, this.endDate, this.endTime)
    .then(x => { 
      this.wholeSemester = x;
      this.condition = (x == "yes") ? true : false; 
    });
  }


  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }


  onSave(){
    // show progess bar while data is saving
    this.conditionLoad = false;

    // transform date in format ready to save in database
    let startDateNew = moment(this.form.value.startDate).format('YYYY-MM-DD');
    let endDateNew = moment(this.form.value.endDate).format('YYYY-MM-DD');

    this.dataService.updateReservation(this.room, this.title, this.form.value.title, this.person, this.form.value.person,
      this.startDate, this.startTime, this.endDate, this.endTime,
      startDateNew, this.form.value.startTime, endDateNew, this.form.value.endTime, this.wholeSemester)
    .then(()=>{
      // close after saving
      this.dialogRef.close();
    });
  }


  onDelete(){
    // transform date in format ready to save in database
    let startDateNew = moment(this.form.value.startDate).format('YYYY-MM-DD');
    let endDateNew = moment(this.form.value.endDate).format('YYYY-MM-DD');

    // ask user to confirm deleting
    this.dialog.open(MatConfirmDialogComponent, {
      disableClose: true
    }).afterClosed().subscribe(res => {
      if(res){
        // show progess bar while data is deleting
        this.conditionLoad = false;

        this.dataService.deleteReservation(this.room, this.form.value.title, this.form.value.person,
          this.startDate, this.startTime, this.endDate, this.endTime, this.wholeSemester)
        .then(()=>{
          // close after saving
          this.dialogRef.close();
        });
      }
    });
  }

}
