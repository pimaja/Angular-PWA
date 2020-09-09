import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //localStorage.removeItem('lastDateChecked');
    localStorage.setItem('lastDateChecked', new Date().toDateString());
  }

}
