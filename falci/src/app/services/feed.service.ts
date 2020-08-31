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

  getNews(newsId: any) {
    return this.http.get(environment.baseUrl + environment.apiUrls.getNews + '?newsId=' + newsId);
  }

  getComments(newsId: any, pageId: any) {
    var data = {
      Args: {
        PageIndex: pageId,
        PageSize: 5,
        PagingStrategy: 1,
        FilteringOptions: [
            {
                Field: "RefId",
                Value: newsId
            }
        ]
      }
    };

    return this.http.post(environment.baseUrl + environment.apiUrls.getComments, data);
  }

  submitComment(data: any) {
    return this.http.post(environment.baseUrl + environment.apiUrls.submitComment, data);
  }

  removeComment(data: any) {
    return this.http.post(environment.baseUrl + environment.apiUrls.removeComment, data);
  }

  submitLike(data: any) {
    return this.http.post(environment.baseUrl + environment.apiUrls.submitLike, data);
  }

  removeLike(data: any) {
    return this.http.post(environment.baseUrl + environment.apiUrls.removeLike, data);
  }
}
