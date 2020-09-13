import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserService } from 'src/app/services/user.service';
import { ForgatPassword } from 'src/app/interfaces/new-user';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
//import { UserService } from '../user.service';

@Component({
  selector: 'page-forgat-password',
  templateUrl: 'forgat-password.html',
  styleUrls: ['./forgat-password.scss'],
})
export class ForgatPasswordPage {
  submitted = false;
  forgatPassword: ForgatPassword = { UserName: '', EMail: '' };

  constructor(
    public userData: UserData,
    public router: Router,
    private service: UserService,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService
  ) { }

  onSubmit(form: NgForm) {
    this.service.forgatPassword(form.value).subscribe(
      (res: any) => {
        this.notificationService.success({Message: "Mail adresinize şifre yenileme linki gönderildi." });
        this.router.navigateByUrl('/login');
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }
}
