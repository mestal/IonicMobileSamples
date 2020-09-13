import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserOptions } from '../../interfaces/user-options';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public router: Router,
    private service: UserService,
    public notificationService: NotificationService,
    private errorHandlerService : ErrorHandlerService
  ) { }

  onLogin(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('userName', res.userName);
        localStorage.setItem('fullName', res.fullName);
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('isTestUser', res.isTestUser);
        this.router.navigateByUrl('/mainPage');
      },
      err => {
        this.errorHandlerService.handle(err);
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
