import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { User } from '../user';
import * as fromUser from './../state';
import * as userActions from './../state/user.actions';
import { LoginInformation } from "../LoginInformation";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  currentUser: User | null;

  constructor(
    public userData: UserData,
    public router: Router,
    private store: Store<fromUser.State>
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {

      var payload : LoginInformation = {
        userName: form.controls.username.value,
        password: form.controls.password.value
      };

      this.store.dispatch(new userActions.Login(payload));

      // this.userData.login(this.login.username);
      //this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }
  
  logout(): void {
    this.currentUser = null;
  }
}
