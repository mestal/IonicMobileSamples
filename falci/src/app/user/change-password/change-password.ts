import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ChangePassword } from 'src/app/interfaces/new-user';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
  styleUrls: ['./change-password.scss'],
})
export class ChangePasswordPage {
  submitted = false;
  changePassword: ChangePassword = { NewPassword: '', NewPassword2: '', CurrentPassword: '' };

  constructor(
    private service: UserService,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService,
    public router: Router
  ) { }

  onSubmit(form: NgForm) {
    this.service.changePassword(form.value).subscribe(
      (res: any) => {
        this.notificationService.success({Message: "Şifre değiştirildi." });
        this.router.navigateByUrl('/myAccount');
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }
}
