import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserOptions } from '../../interfaces/user-options';
import { User } from '../user';
import { UserService } from 'src/app/services/user.service';

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
    public router: Router,
    private service: UserService
  ) { }

  onLogin(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('userName', res.userName);
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        this.router.navigateByUrl('/mainPage');
      },
      err => {
        if (err.error != null && err.error.Message)
        {
          alert(err.error.Message);
        }
        else {
          alert(JSON.stringify(err));
        }
      }
    );
  }

  onSignup() {
    this.router.navigateByUrl('/register');
  }

  forgatPassword() {
    this.router.navigateByUrl('/forgatPassword');
  }
}
