import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserService } from 'src/app/services/user.service';
import { NewUser, ResetPassword } from 'src/app/interfaces/new-user';
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
    private route: ActivatedRoute
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
