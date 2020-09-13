import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { UserService } from 'src/app/services/user.service';
import { ResetPassword } from 'src/app/interfaces/new-user';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
//import { UserService } from '../user.service';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
  styleUrls: ['./reset-password.scss'],
})
export class ResetPasswordPage {
  submitted = false;
  resetPassword: ResetPassword = { NewPassword: '', NewPassword2: '', Email: '', Token: '' };
  email: string;
  token: string;

  constructor(
    public userData: UserData,
    public router: Router,
    private service: UserService,
    private route: ActivatedRoute,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService
  ) { }

  ionViewDidEnter() {
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.email = this.route.snapshot.queryParamMap.get('email');
  }

  onSubmit(form: NgForm) {
    form.value.Email = this.email;
    form.value.Token = this.token;

    this.service.resetPassword(form.value).subscribe(
      (res: any) => {
        this.notificationService.success({Message: "Şifre değiştirildi." });
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }
}
