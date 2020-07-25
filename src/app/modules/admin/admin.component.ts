import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from "../core/data.service";
import { MatDialogRef } from '@angular/material/dialog';
import { DateAdapter } from '@angular/material/core';
import { ViewChild } from '@angular/core';  
import { CSVRecord } from '../core/CSVRecord';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public records: any[] = []; 
  @ViewChild('csvReader') csvReader: any;

  hide = true;
  errorMessage;
  condition = true;
  condition2 = true;
  contentEditable = false;  

  loginForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    // set username to "Admin aplikacije"
    username: new FormControl('', Validators.pattern('admin')),
    // set password to random 16 symbols string
    password: new FormControl('', Validators.pattern('c4tKZPDyzePazntE'))
  });

  dataForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    startExams: new FormControl(''),
    endExams: new FormControl(''),
    startHolidays: new FormControl(''),
    endHolidays: new FormControl('')
  });


  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<AdminComponent>,
    private _adapter: DateAdapter<any>
   ) {  }

  ngOnInit(): void {
    this._adapter.setLocale('hr');
  }


  login(){
    if(this.loginForm.valid){
      this.condition = false;
    }
    else{
      this.errorMessage = "Upišite ispravno korisničko ime i lozinku."
    }
  }


  save(){
    this.condition2 = false;
    this.dataService.saveStartAndEndOfSemester(this.dataForm.value.start, this.dataForm.value.end, 
      this.dataForm.value.startExams, this.dataForm.value.endExams, this.dataForm.value.startHolidays, this.dataForm.value.endHolidays)
    .then(()=>{
      // close after saving
      this.dialogRef.close();
    });
  }


  cancel(){
    this.dialogRef.close();
  }

  // for reading csv file into CSVRecord array records
  uploadListener($event: any): void {   
    let files = $event.srcElement.files;  
  
    // if it is a valid file
    if (files[0].name.endsWith(".csv")) {  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result; 
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray); 
      };  
  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  } 
  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any) {  
    let csvArr = [];  
  
    for (let i = 0; i < csvRecordsArray.length - 1; i++) {  
      let currentRecord = (<string>csvRecordsArray[i]).split(',');  
      let csvRecord: CSVRecord = new CSVRecord();  
      csvRecord.room = currentRecord[0];
      csvRecord.title = currentRecord[1];  
      csvRecord.person = currentRecord[2];  
      csvRecord.date = currentRecord[3];  
      csvRecord.startTime = currentRecord[4];  
      csvRecord.endTime = currentRecord[5]; 
      csvArr.push(csvRecord); 
    }  
    return csvArr;  
  }   
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }  

  // load data from records to Parse Server
  load(){
    this.condition2 = false;
    this.dataService.LoadDataFromCsv(this.records).then(()=>{
      // close after saving
      this.dialogRef.close();
    });
  }

  delete(){
    this.condition2 = false;
    this.dataService.deleteEverythingOnAdminDemand().then(()=>{
      // close after saving
      this.dialogRef.close();
    });
  }

  toggleEditable(event) {
    if ( event.target.checked ) {
        this.contentEditable = true;
   }
}

}
