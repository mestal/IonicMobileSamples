import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserService } from 'src/app/services/user.service';
import { NewUser } from 'src/app/interfaces/new-user';
//import { UserService } from '../user.service';

@Component({
  selector: 'page-new-account',
  templateUrl: 'new-account.html',
  styleUrls: ['./new-account.scss'],
})
export class NewAccountPage {
  submitted = false;
  newUser: NewUser = { UserName: '', Password: '', Password2: '', EMail: '', FullName: '' };

  constructor(
    public userData: UserData,
    public router: Router,
    private service: UserService
  ) { }

  onSubmit(form: NgForm) {
    this.service.register(form.value).subscribe(
      (res: any) => {
        
      },
      err => {
        if (err.error != null && err.error.Message)
        {
          alert(err.error.Message);
        }
      }
    );
  }
}