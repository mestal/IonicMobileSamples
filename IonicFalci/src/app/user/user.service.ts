import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginInformation } from "./LoginInformation";
import { tap, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userUrl = 'http://localhost:62741/api/User/Login';

    constructor(private http: HttpClient) {}

    // login(loginPayLoad: LoginInformation) :Observable<any>  {
    //     return this.http.post(this.userUrl, loginPayLoad, );


    // }

    login(loginPayLoad: LoginInformation): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.userUrl, loginPayLoad, { headers })
          .pipe(
            tap(data => console.log('login: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
      }

      private handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
      }
}