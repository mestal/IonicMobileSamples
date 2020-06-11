// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError, of } from 'rxjs';
// import { LoginInformation } from "./LoginInformation";
// import { tap, catchError } from 'rxjs/operators';


// @Injectable({
//     providedIn: 'root'
// })
// export class UserService {
//     private userUrl = 'http://localhost:62741/api/User/Login';

//     constructor(private http: HttpClient) {}

//     // login(loginPayLoad: LoginInformation) :Observable<any>  {
//     //     return this.http.post(this.userUrl, loginPayLoad, );


//     // }

//     login(loginPayLoad: LoginInformation): Observable<any> {


//         var result = {"userId":"829b0527-7f96-4ac4-21b9-08d7c19afadb","userName":"user1","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI4MjliMDUyNy03Zjk2LTRhYzQtMjFiOS0wOGQ3YzE5YWZhZGIiLCJSb2xlIjoiQ29uc3VtZXIiLCJuYmYiOjE1ODQxMDQwNDksImV4cCI6MTU4NDEwNTg0OSwiaWF0IjoxNTg0MTA0MDQ5fQ.CmTGtzXZ2d4G4LS7-81b78i-Ez733B3V9TEQeDjO3dQ","role":"Consumer","point":0}
        
//         //"{userId\":\"829b0527-7f96-4ac4-21b9-08d7c19afadb\",\"userName\":\"user1\",\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI4MjliMDUyNy03Zjk2LTRhYzQtMjFiOS0wOGQ3YzE5YWZhZGIiLCJSb2xlIjoiQ29uc3VtZXIiLCJuYmYiOjE1ODQxMDQwNDksImV4cCI6MTU4NDEwNTg0OSwiaWF0IjoxNTg0MTA0MDQ5fQ.CmTGtzXZ2d4G4LS7-81b78i-Ez733B3V9TEQeDjO3dQ\",\"role\":\"Consumer\",\"point\":0}";

//         return of(result);

//         // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//         // return this.http.post(this.userUrl, loginPayLoad, { headers })
//         //   .pipe(
//         //     tap(data => console.log('login: ' + JSON.stringify(data))),
//         //     catchError(this.handleError)
//         //   );
//       }

//       private handleError(err) {
//         // in a real world app, we may send the server to some remote logging infrastructure
//         // instead of just logging it to the console
//         let errorMessage: string;
//         if (err.error instanceof ErrorEvent) {
//           // A client-side or network error occurred. Handle it accordingly.
//           errorMessage = `An error occurred: ${err.error.message}`;
//         } else {
//           // The backend returned an unsuccessful response code.
//           // The response body may contain clues as to what went wrong,
//           errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
//         }
//         console.error(err);
//         return throwError(errorMessage);
//       }
// }