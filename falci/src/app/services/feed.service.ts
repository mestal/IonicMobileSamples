import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getFeeds(data: any) {
    return this.http.post(environment.baseUrl + environment.apiUrls.getFeeds, data);
  }

  getSurvey(surveyId: any) {
    return this.http.get(environment.baseUrl + environment.apiUrls.getSurvey + '?surveyId=' + surveyId);
  }
}
