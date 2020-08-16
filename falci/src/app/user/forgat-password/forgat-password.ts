import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserService } from 'src/app/services/user.service';
import { ForgatPassword } from 'src/app/interfaces/new-user';
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
    private service: UserService
  ) { }

  onSubmit(form: NgForm) {
    this.service.forgatPassword(form.value).subscribe(
      (res: any) => {
        alert('Mail adresinize şifre yenileme linki gönderildi.');
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
