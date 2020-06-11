import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { User } from '../user';
import { LoginInformation } from "../LoginInformation";
import { UserService } from 'src/app/services/user.service';
//import { UserService } from '../user.service';

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
    private service: UserService
  ) { }

  onLogin(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        if(res.role == "Falci")
          this.router.navigateByUrl('/mainPage');
        else if(res.role == "Consumer")
          this.router.navigateByUrl('/mainPage');
      },
      err => {
        if (err.status == 400)
        {
          console.log('Incorrect username or password.');
          //this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        }
        else
          console.log(err);
      }
    );

    // this.submitted = true;

    // if (form.valid) {

    //   var payload : LoginInformation = {
    //     userName: form.controls.username.value,
    //     password: form.controls.password.value
    //   };

    //   //this.store.dispatch(new userActions.Login(payload));

    //   this.userData.login(this.login.username);
    //   //this.router.navigateByUrl('/app/tabs/schedule');
    // }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

  // isLoggedIn(): boolean {
  //   return !!this.currentUser;
  // }
  
}
