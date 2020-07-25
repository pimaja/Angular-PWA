import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Parse from 'parse';
import * as moment from 'moment';

// BACK4APP Parse Server
/*Parse.initialize('vqkUIZhZVxJM8D0Hvpk64jDiBmFbtByUFSlQGHzV', 'WSJv4H3hAzjJNsqJz8hBq4lOlebIHlRRvU9ZD52Y'); // use your appID & your js key
(Parse as any).serverURL = 'https://parseapi.back4app.com/'; // use your server url*/

// localhost Parse Server
Parse.initialize('g56bVxyRTCw5DNjFliaQTOUfq2lv02c3k5cOdIwa', 'i9MfvGECemyRJBCpXJQBGWlou3w0O1UcI1EVGZf1'); // use your appID & your js key
(Parse as any).serverURL = 'http://localhost:1337/parse'; // use your server url


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  createRooms(){
    console.log("creating rooms");

    const Rooms = Parse.Object.extend('Rooms');
    let room = new Rooms();
    room.set("label", "001");
    room.set("capacity", "88");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "002");
    room.set("capacity", "32");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "003");
    room.set("capacity", "173");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "004");
    room.set("capacity", "87");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "005");
    room.set("capacity", "78");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "006");
    room.set("capacity", "88");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "101");
    room.set("capacity", "80");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "104");
    room.set("capacity", "32");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "105");
    room.set("capacity", "32");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "108");
    room.set("capacity", "32");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "109");
    room.set("capacity", "32");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "110");
    room.set("capacity", "76");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "201");
    room.set("capacity", "64");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "A001");
    room.set("capacity", "88");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "A002");
    room.set("capacity", "88");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "A101");
    room.set("capacity", "88");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "A102");
    room.set("capacity", "88");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "A201");
    room.set("capacity", "32");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "A318");
    room.set("capacity", "32");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "PRA202");
    room.set("capacity", "16");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "PR1");
    room.set("capacity", "18");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "PR2");
    room.set("capacity", "18");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "PR3");
    room.set("capacity", "16");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "PR4");
    room.set("capacity", "9");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });

    room = new Rooms();
    room.set("label", "PR5");
    room.set("capacity", "12");
    room.save()
    .then((object)=>{
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      console.log('Failed to create new object, with error code: ' + error.message);
    });
  }
  

  async getAllRoomsAndCapacity(){
    let room_capacity = new Map();

    const Rooms = Parse.Object.extend('Rooms');
    const query = new Parse.Query(Rooms);
    const results = await query.find();
    for (let i = 0; i < results.length; i++) {
      var object = results[i];
      room_capacity.set(object.get('label'), object.get('capacity'));
    }
    return room_capacity;
  }


  async getAllEventsForRoom(room: string){
    let obj = {};
    let data = new Array<any>();

    const Events = Parse.Object.extend('Reservations');
    const query = new Parse.Query(Events);
    query.equalTo("room", room);
    query.select("person", "title", "start", "end", "whole_semester");
    // set limit to 10000, default is 100
    query.limit(10000);
    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      obj["title"] = results[i].get('title') + '\n' + results[i].get('person');
      obj["start"] = results[i].get('start');
      obj["end"] = results[i].get('end');
      if(results[i].get('whole_semester') == "no") obj["color"] = "#FF7043";
      else obj["color"] = "#FFD740";
      data.push(obj);
      obj = {};
    }

    JSON.stringify(data);
    return data;
  }


  async getSemesterStart(){
    const SemesterDates = Parse.Object.extend('SemesterDates');
    const query = new Parse.Query(SemesterDates);
    const object = await query.first();
    if(object){
      var startSemester = object.get('startSemester');
    }
    return startSemester;
  }

  async getSemesterEnd(){
    const SemesterDates = Parse.Object.extend('SemesterDates');
    const query = new Parse.Query(SemesterDates);
    const object = await query.first();
    if(object){
      var endSemester = object.get('endSemester');
    }
    return endSemester;
  }


  async findAllDates(startDate:string){
    // find all dates when there are lessons for given subject in semester
    // if not given startSemester and endSemester by admin
    // suppose start of semester is first Monday in October/March
    // suppose end of semester is Friday in 17/15 weeks after start
    // 8th and 9th week are exams!!

    var start, dt;
    var d = new Date();
    var dates = Array<String>();
    const month = parseInt(startDate.split('-')[1]);

    // variables for start and end of semester
    var startSemester;
    var endSemester;
    var startExams;
    var endExams;
    var startHolidays;
    var endHolidays;

    const SemesterDates = Parse.Object.extend('SemesterDates');
    const query = new Parse.Query(SemesterDates);
    const object = await query.first();
    if(object){
      // there is only one row for dates, only one semester dates
      startSemester = object.get('startSemester');
      endSemester = object.get('endSemester');
      startExams = object.get('startExams');
      endExams = object.get('endExams');
      startHolidays = object.get('startHolidays');
      endHolidays = object.get('endHolidays');
    }

    // if start of semester is given by admin
    if(startSemester != null){
      // if startSemester is later than the clicked dates then reservation cannot be made for whole semester
      if(startDate < startSemester || startDate > endSemester){
        return Array<String>();
      }

      d = new Date(startSemester);

      // get the first day of week that is the same as day of given startDate
      var date = new Date(startDate);
      while (d.getDay() !== date.getDay()) {
        d.setDate(d.getDate() + 1);
      } 

      // save first date into start
      start = moment(d).format('YYYY-MM-DD');
      dates.push(start);

      // get the date in next week
      d.setDate(d.getDate() + 7);

      // if exam weeks are given by admin get the dates up to that date
      // suppose exam weeks are before holidays like in the current definition of semester
      if(startExams != null){
        while(d <= new Date(startExams)){
          dt = moment(d).format('YYYY-MM-DD'); 
          dates.push(dt);
          d.setDate(d.getDate() + 7);
        }
        //get next date after the end of exam weeks
        while(d <= new Date(endExams)){
          d.setDate(d.getDate() + 7);
        } 
      }

      // if holiday weeks are given by admin get the dates up to that date
      if(startHolidays != null){
        while(d <= new Date(startHolidays)){
          dt = moment(d).format('YYYY-MM-DD'); 
          dates.push(dt);
          d.setDate(d.getDate() + 7);
        }
        //get next date after the end of exam weeks
        while(d <= new Date(endHolidays)){
          d.setDate(d.getDate() + 7);
        }
      }

      // fill the dates up to endSemester
      while(d <= new Date(endSemester)){
        dt = moment(d).format('YYYY-MM-DD'); 
        dates.push(dt);
        d.setDate(d.getDate() + 7);
      }
    }
    else{
      // admin didn't give dates for semester
      if(month >= 3 && month <= 6){
        // summer semester - starts first Monday in March
        // setMonth counts from 0, 0=January, 1=February, 2=March, ...
        d.setMonth(2);
        d.setFullYear(parseInt(startDate.split('-')[0]));
        d.setDate(1);

        // get the first day of week in March that is the same as day of given startDate
        var date = new Date(startDate);
        while (d.getDay() !== date.getDay()) {
          d.setDate(d.getDate() + 1);
        }

        // save first date into semesterStart
        start = moment(d).format('YYYY-MM-DD');
        dates.push(start);

        // in summer semester there is 7 weeks of lessons + 2 weeks of exams + 6 weeks of lessons
        // first add the first 7 weeks (first one is already added, therefore 6 weeks remaining)
        for(var i = 0; i < 6; i++){
          d.setDate(d.getDate() + 7);
          dt = moment(d).format('YYYY-MM-DD'); 
          dates.push(dt);
        }

        // skip 2 weeks of exams
        d.setDate(d.getDate() + 7);
        d.setDate(d.getDate() + 7);

        // add remaining 6 dates
        for(var i = 0; i < 6; i++){
          d.setDate(d.getDate() + 7);
          dt = moment(d).format('YYYY-MM-DD'); 
          dates.push(dt);
        }          
      }
      else if(month>=10 || month<=1){
        // winter semester - starts first Monday in October
        d.setMonth(9);
        d.setFullYear(parseInt(startDate.split('-')[0]));
        d.setDate(1);

        // get the first day of week in October that is the same as day of given startDate
        var date = new Date(startDate);
        while (d.getDay() !== date.getDay()) {
          d.setDate(d.getDate() + 1);
        }

        // save first date into semesterStart
        start = moment(d).format('YYYY-MM-DD'); 
        dates.push(start);

        // in winter semester there is 7 weeks of lessons + 2 weeks of exams + 3 weeks of lessons + 2 weeks holidays + 3 weeks of lessons
        // first add the first 7 weeks (first one is already added, therefore 6 weeks remaining)
        for(var i = 0; i < 6; i++){
          d.setDate(d.getDate() + 7);
          dt = moment(d).format('YYYY-MM-DD'); 
          dates.push(dt);
        }

        // skip 2 weeks of exams
        d.setDate(d.getDate() + 7);
        d.setDate(d.getDate() + 7);

        // add next 3 dates
        for(var i = 0; i < 3; i++){
          d.setDate(d.getDate() + 7);
          dt = moment(d).format('YYYY-MM-DD'); 
          dates.push(dt);
        }

        // skip 2 weeks of holidays
        d.setDate(d.getDate() + 7);
        d.setDate(d.getDate() + 7);

        // add remaining 3 dates
        for(var i = 0; i < 3; i++){
          d.setDate(d.getDate() + 7);
          dt = moment(d).format('YYYY-MM-DD'); 
          dates.push(dt);
        }
      } 
    }

    return dates;
  }


  async saveNewReservation(room:string, title:string, person:string, 
    startDate:string, startTime:string, endDate:string, endTime:String, wholeSemester:string){
      var starts, ends;
      const Reservations = Parse.Object.extend('Reservations');

      if(wholeSemester == "yes"){
        // for every date make a reservation
        starts = await this.findAllDates(startDate);

        // if given date is outside of semester duration we don't make reservations for whole semester
        if(starts.length === 0){
          var semesterStart = await this.getSemesterStart();
          if(semesterStart === undefined){
            return 'Rezervacija za cijeli semester ne može biti napravljena ako je odabran datum koji nije u okvirima trajanja semestra! ' +
            'Ljetni semestar traje od ožujka do lipnja, a zimski semestar od listopada do siječnja.';
          }
          else{
            return 'Rezervacija za cijeli semester ne može biti napravljena ako je odabran datum koji nije u okvirima trajanja semestra! ' + 
            'Ovaj semester traje od ' + moment(semesterStart).format('DD. MM. YYYY.') + ' do ' + moment(await this.getSemesterEnd()).format('DD. MM. YYYY.');
          }
        }

        ends = await this.findAllDates(endDate);
        for(var i = 0; i < starts.length; i++){
          let reservations = new Reservations();
          reservations.set("room", room);
          reservations.set("person", person);
          reservations.set("title", title);
          reservations.set("start", starts[i] + 'T' + startTime);
          reservations.set("end", ends[i] + 'T' + endTime);
          reservations.set("whole_semester", wholeSemester);
          await reservations.save();
        }
      }
      else{
        // save reservation only for the given day
        let reservations = new Reservations();
        reservations.set("room", room);
        reservations.set("person", person);
        reservations.set("title", title);
        reservations.set("start", startDate + 'T' + startTime);
        reservations.set("end", endDate + 'T' + endTime);
        reservations.set("whole_semester", wholeSemester);
        await reservations.save();
      }
  }


  async LoadDataFromCsv(records){
    var date;
    var dates;

    for(let record of records){
      date = record.date;
      dates = await this.findAllDates(date);
      const Reservations = Parse.Object.extend('Reservations');

      for(var i = 0; i < dates.length; i++){
        let reservations = new Reservations();
        reservations.set("room", record.room);
        reservations.set("person", record.person);
        reservations.set("title", record.title);
        reservations.set("start", dates[i] + 'T' + record.startTime);
        reservations.set("end", dates[i] + 'T' + record.endTime);
        reservations.set("whole_semester", "yes");
        await reservations.save();
      }
    }
  }


  async getWholeSemesterValue(room:string, title:string, person:string, startDate:string, startTime:string, endDate:string, endTime:string){
    const Reservations = Parse.Object.extend('Reservations');
      const query = new Parse.Query(Reservations);
      query.equalTo("room", room);
      query.equalTo("title", title);
      query.equalTo("person", person);
      query.equalTo("start", startDate + 'T' + startTime);
      query.equalTo("end", endDate + 'T' + endTime);
      var results = await query.first();
      return results.get("whole_semester");
  }


  async updateReservation(room:string, titleOld: string, titleNew:string, personOld:string, personNew:string, 
    startDateOld:string, startTimeOld:string, endDateOld:string, endTimeOld:String, 
    startDateNew:string, startTimeNew:string, endDateNew:string, endTimeNew:String, wholeSemester:string){
    const Reservations = Parse.Object.extend('Reservations');

    if(wholeSemester == "yes"){
      // for each date make a reservation
      var startsOld = await this.findAllDates(startDateOld);
      var endsOld = await this.findAllDates(endDateOld);
      var startsNew = await this.findAllDates(startDateNew);
      var endsNew = await this.findAllDates(endDateNew);
      
      for(var i=0; i<startsNew.length; i++){
        // room stays the same value, others can be changed
        const query = new Parse.Query(Reservations);
        query.equalTo("room", room);
        query.equalTo("person", personOld);
        query.equalTo("title", titleOld);
        query.equalTo("start", startsOld[i] + 'T' + startTimeOld);
        query.equalTo("end", endsOld[i] + 'T' + endTimeOld);
        var object = await query.first();
        // update it with new data. 
        object.set("person", personNew);
        object.set("title", titleNew);
        object.set("start", startsNew[i] + 'T' + startTimeNew);
        object.set("end", endsNew[i] + 'T' + endTimeNew);
        object.set("whole_semester", wholeSemester);
        object.save();
      }
    }
    else{
      // update reservation only for the given days
      // room stays the same value, others can be changed
      const query = new Parse.Query(Reservations);
      query.equalTo("room", room);
      query.equalTo("person", personOld);
      query.equalTo("title", titleOld);
      query.equalTo("start", startDateOld + 'T' + startTimeOld);
      query.equalTo("end", endDateOld + 'T' + endTimeOld);
      var object = await query.first();
      object.set("person", personNew);
      object.set("title", titleNew);
      object.set("start", startDateNew + 'T' + startTimeNew);
      object.set("end", endDateNew + 'T' + endTimeNew);
      object.set("whole_semester", wholeSemester);
      object.save();
    }      
  }


  async deleteReservation(room:string, title:string, person:string,
    startDate:string, startTime:string, endDate:string, endTime:string, wholeSemester:string){
      const Reservations = Parse.Object.extend('Reservations');

      if(wholeSemester == "yes"){
        // for every date delete a reservation
        var starts = await this.findAllDates(startDate);
        var ends = await this.findAllDates(endDate);
        for(var i=0; i<starts.length; i++){
          const query = new Parse.Query(Reservations);
          query.equalTo("room", room);
          query.equalTo("title", title);
          query.equalTo("person", person);
          query.equalTo("start", starts[i] + 'T' + startTime);
          query.equalTo("end", ends[i] + 'T' + endTime);
          var object = await query.first();
          object.destroy();
        }
      }
      else{
        // delete only a given reservations
        const query = new Parse.Query(Reservations);
        query.equalTo("room", room);
        query.equalTo("title", title);
        query.equalTo("person", person);
        query.equalTo("start", startDate + 'T' + startTime);
        query.equalTo("end", endDate + 'T' + endTime);
        var object = await query.first();
        object.destroy();
      }
  }


  async findFreeRooms(startDate:string, startTime:string, endDate:string, endTime:string){
    let rooms_capacities = new Map();
    let available = new Map();

    rooms_capacities = await this.getAllRoomsAndCapacity();
    for (let entry of rooms_capacities) {
      let room = entry[0];

      // flag, if risen this room is not available
      let flag = 0;
      
      // get all events for that room
      const Events = Parse.Object.extend('Reservations');
      const query = new Parse.Query(Events);
      query.equalTo("room", room);
      query.select("start", "end");
      var results = await query.find();
      var dstart1 = new Date(moment(startDate).format('YYYY-MM-DD') + 'T' + startTime);
      var dend1 = new Date(moment(endDate).format('YYYY-MM-DD') + 'T' + endTime);
      for (var i = 0; i < results.length; i++){
        // compare dates and times
        var dstart2 = new Date(results[i].get('start'));
        var dend2 = new Date(results[i].get('end'));
        if(dstart1 >= dstart2 && dstart1 <= dend2){
          // if begins before some event ended
          flag = 1;
          break;
        }
        else if(dend1 >= dstart2 && dend1 <= dend2){
          // if ends before other event ended
          flag = 1;
          break;
        }
        else if(dstart1 <= dstart2 && dend1 >= dend2){
          // if begins before and ends after some other event
          flag = 1;
          break;
        }
      }
      
      if(flag == 0){
        available.set(entry[0], entry[1]);
      }
    }

    return available;
  }


  async saveStartAndEndOfSemester(start:string, end:string, startE:string, endE:string, startH:string, endH:string){
    const SemesterDates = Parse.Object.extend('SemesterDates');
    // remove the previous semester dates
    // there will always be just one row of semester dates
    var query = new Parse.Query(SemesterDates);
    var object = await query.first();
    if(object) object.destroy();

    const Reservations = Parse.Object.extend('Reservations');
    query = new Parse.Query(Reservations);
    query.equalTo("whole_semester", "yes");
    var results = await query.find();
    for(var i = 0; i < results.length; i++){
      // delete all of reservations - in case dates were first generated and after that it was decided by admin to change them
      // assume it is enough to keep reservations for only one semester and new semester dates will be defined
      //  only after previous semester ended
      results[i].destroy();

      // we could also archive them in case it's needed ??
    }

    // save new dates
    var semesterDates = new SemesterDates();
    semesterDates.set("startSemester", moment(start).format('YYYY-MM-DD'));
    semesterDates.set("endSemester", moment(end).format('YYYY-MM-DD'));
    semesterDates.set("startExams", moment(startE).format('YYYY-MM-DD'));
    semesterDates.set("endExams", moment(endE).format('YYYY-MM-DD'));
    semesterDates.set("startHolidays", moment(startH).format('YYYY-MM-DD'));
    semesterDates.set("endHolidays", moment(endH).format('YYYY-MM-DD'));
    semesterDates.save();
  }


  async deleteEverythingOnAdminDemand(){
    const SemesterDates = Parse.Object.extend('SemesterDates');
    var query = new Parse.Query(SemesterDates);
    var object = await query.first();
    const Reservations = Parse.Object.extend('Reservations');
    query = new Parse.Query(Reservations);
    var results = await query.find();
    if(object !== undefined){
      // if there are start and end of semester defined by admin
      for(var i = 0; i < results.length; i++){
        if( results[i].get('start').split('T')[0] >= object.get('startSemester')
          && results[i].get('end').split('T')[0] <= object.get('endSemester')){
            results[i].destroy();
        }
      }
      object.destroy();
    }
    else{
      // delete all reservations that have start date smaller than today
      var d = new Date();
      var today = moment(d).format('YYYY-MM-DD');
      for(var i = 0; i < results.length; i++){
        if(results[i].get('start').split('T')[0] <= today){
            results[i].destroy();
        }
      }
    }
  }
  
}
