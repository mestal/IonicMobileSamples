import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserService } from 'src/app/services/user.service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
import { NotificationService } from 'src/app/shared-module/notification-service';
//import { UserService } from '../user.service';

@Component({
  selector: 'page-new-user-confirmation',
  templateUrl: 'newUserConfirmation.html',
  styleUrls: ['./newUserConfirmation.scss'],
})
export class NewUserConfirmationPage {
  message: string;

  constructor(
    public router: Router,
    private service: UserService,
    private route: ActivatedRoute,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService
  ) { }
  
  ionViewDidEnter() {
    const token = this.route.snapshot.queryParamMap.get('token');
    const email = this.route.snapshot.queryParamMap.get('email');

    var payload = {
      email: email,
      token: token
    }
    this.service.confirmNewUser(payload).subscribe((result: any) => {
      this.notificationService.success({ Message: "Üye aktifleştirildi."});
      this.router.navigateByUrl('/login');
    },
    err => {
      this.errorHandlerService.handle(err);
    });
  }
}
