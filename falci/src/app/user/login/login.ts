import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserOptions } from '../../interfaces/user-options';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';

import { constants } from './../../constants';
import { environment } from 'src/environments/environment';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  isAndroid = false;

  constructor(
    public router: Router,
    private service: UserService,
    public notificationService: NotificationService,
    private errorHandlerService : ErrorHandlerService,
    private platform: Platform
  ) { 
    this.isAndroid = environment.platform == 'android';
  }

  onLogin(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('userName', res.userName);
        localStorage.setItem('fullName', res.fullName);
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('isTestUser', res.isTestUser);
        localStorage.setItem('picturePath', environment.urlForAssets + constants.folderForProfilePictures + res.picturePath);
        localStorage.setItem('point', res.point)

        this.service.user = {
          userName: res.userName,
          picturePath: environment.urlForAssets + constants.folderForProfilePictures + res.picturePath,
          fullName: res.fullName,
          role: res.role,
          token: res.token,
          isTestUser: res.isTestUser,
          point: res.point
        };

        this.service.user$.next(this.service.user);

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
