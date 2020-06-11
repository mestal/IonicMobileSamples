import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserData {

  constructor(
  ) { }

  login(username: string): boolean {
    return true;
  }

  signup(username: string): boolean {
    return true;
  }

  logout(): any{
    return null;
  }


  isLoggedIn(): boolean {
    return true;
  }
}
