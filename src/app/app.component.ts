import { Component } from '@angular/core';
import { DataService } from "./modules/core/data.service" 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rezervacija-predavaonica';

  constructor(
    private data: DataService
  ){}

  ngOnInit(){
    // run on load
    this.data.createRooms();
  }

}
