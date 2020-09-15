import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';

@Component({
  selector: 'page-new-account',
  templateUrl: 'new-account.html',
  styleUrls: ['./new-account.scss'],
})
export class NewAccountPage {
  get userName() {
    return this.registrationForm.get('userName');
  }

  get fullName() {
    return this.registrationForm.get('fullName');
  }

  get eMail() {
    return this.registrationForm.get('eMail');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get password2() {
    return this.registrationForm.get('password2');
  }

  get job() {
    return this.registrationForm.get('job');
  }

  errorMessages = {
    userName: [
       { type: 'required', message: 'İsim zorunludur.' },
       { type: 'maxlength', message: 'İsim 256 karakteri geçemez.' }
    ],
    fullName: [
      { type: 'required', message: 'İsim zorunludur.' },
      { type: 'maxlength', message: 'İsim 150 karakteri geçemez.' }
    ],
    eMail: [
      { type: 'required', message: 'E-Mail zorunludur.' },
      { type: 'pattern', message: 'Lütfen geçerli bir E-Mail giriniz.' }
    ],
    password: [
      { type: 'required', message: 'Şifre zorunludur.' },
      { type: 'minlength', message: 'Şifre en az 6 karakter olabilir.' }
    ],
    password2: [
      { type: 'required', message: 'Şifre zorunludur.' },
      { type: 'minlength', message: 'Şifre en az 6 karakter olabilir.' }
    ],
    gender: [
      { type: 'required', message: 'Şifre zorunludur.' }
    ],
    job: [
      { type: 'maxlength', message: 'Meslek 100 karakteri geçemez.' }
    ]
  };

  registrationForm = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.maxLength(256)]], 
    password: ['', [Validators.required, Validators.minLength(6)]], 
    password2: ['', [Validators.required, Validators.minLength(6)]], 
    eMail: ['', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
    ]], 
    fullName: ['', [Validators.required, Validators.maxLength(150)]],
    gender: [''],
    relationshipStatus: [''],
    birthDate: [''],
    job: ['', [Validators.maxLength(100)]]
  });

  constructor(
    public router: Router,
    private service: UserService,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
  ) { }

  submit() {
    this.service.register(this.registrationForm.value).subscribe(
      (res: any) => {
        this.notificationService.success({Message: "Lütfen mailinize gönderilen aktifleştirme butonuna tıklayın.", Duration: 6000 });
        this.router.navigateByUrl('/login');
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }
}
