import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FortuneTellingService {

  constructor(private http: HttpClient) { }

  getFortuneTellings(data: any) {
    return this.http.post(environment.baseUrl + environment.apiUrls.getFortuneTellings, data);
  }

  getActiveFortuneTellers() {
    return this.http.get(environment.baseUrl + environment.apiUrls.getActiveFortuneTellers);
  }

  submitFortuneTelling(data: any) {
    return this.http.post(environment.baseUrl + environment.apiUrls.submitCoffeeFortuneTelling, data);
  }
}
