import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ChangePassword } from 'src/app/interfaces/new-user';

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
  ) { }

  ionViewDidEnter() {
  }

  onSubmit(form: NgForm) {
    this.service.changePassword(form.value).subscribe(
      (res: any) => {
        alert('Şifre değiştirildi.');
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
}
