import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserService } from 'src/app/services/user.service';
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
    private route: ActivatedRoute
  ) { }
  
  ionViewDidEnter() {
    const token = this.route.snapshot.queryParamMap.get('token');
    const email = this.route.snapshot.queryParamMap.get('email');

    var payload = {
      email: email,
      token: token
    }
    this.service.confirmNewUser(payload).subscribe((result: any) => {
      this.message = "Üye aktifleştirildi.";
    },
    err => {
      if (err.error != null && err.error.Message)
      {
        alert(err.error.Message);
      }
      else {
        alert(JSON.stringify(err));
      }
    });
  }
}
