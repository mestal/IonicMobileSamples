import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

//import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class ConferenceData {
  data: any;

  constructor(public http: HttpClient) {} //, public user: UserData

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http
        .get('assets/data/data.json')
        .pipe(map(this.processData, this));
    }
  }

  processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data;

    // // loop through each day in the schedule
    // this.data.schedule.forEach((day: any) => {
    //   // loop through each timeline group in the day
    //   day.groups.forEach((group: any) => {
    //     // loop through each session in the timeline group
    //     group.sessions.forEach((session: any) => {
    //       session.speakers = [];
    //       if (session.speakerNames) {
    //         session.speakerNames.forEach((speakerName: any) => {
    //           const speaker = this.data.speakers.find(
    //             (s: any) => s.name === speakerName
    //           );
    //           if (speaker) {
    //             session.speakers.push(speaker);
    //             speaker.sessions = speaker.sessions || [];
    //             speaker.sessions.push(session);
    //           }
    //         });
    //       }
    //     });
    //   });
    // });

    return this.data;
  }


  getSpeakers() {
    return this.load().pipe(
      map((data: any) => {
        return data.speakers.sort((a: any, b: any) => {
          const aName = a.name.split(' ').pop();
          const bName = b.name.split(' ').pop();
          return aName.localeCompare(bName);
        });
      })
    );
  }

  getFals() {
    return this.load().pipe(
      map((data: any) => {
        return data.fals;
      })
    );
  }

  
  getFortuneTellers() {
    return this.load().pipe(
      map((data: any) => {
        return data.fortuneTellers;
      })
    );
  }

  getNewsList() {
    return this.load().pipe(
      map((data: any) => {
        return data.newsList;
      })
    );
  }
}
