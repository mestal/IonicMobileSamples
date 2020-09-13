import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserService } from 'src/app/services/user.service';
import { NewUser } from 'src/app/interfaces/new-user';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
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
    private service: UserService,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService
  ) { }

  onSubmit(form: NgForm) {
    this.service.register(form.value).subscribe(
      (res: any) => {
        this.notificationService.success({Message: "Lütfen mailinize gönderilen aktifleştirme linkine tıklayın.", Duration: 6000 });
        this.router.navigateByUrl('/login');
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }
}
