import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';

@Component({
  selector: 'page-update-account',
  templateUrl: 'update-account.html',
  styleUrls: ['./update-account.scss'],
})
export class UpdateAccountPage implements OnInit {

  defaultBirthDate: Date;
  defaultBirthDateString: string;
  birthTimeSet: boolean;
  userName: string;
  private initialBirthTime: Date;

  get fullName() {
    return this.updateForm.get('fullName');
  }

  get job() {
    return this.updateForm.get('job');
  }

  errorMessages = {
    fullName: [
      { type: 'required', message: 'İsim zorunludur.' },
      { type: 'maxlength', message: 'İsim 150 karakteri geçemez.' }
    ],
    job: [
      { type: 'maxlength', message: 'Meslek 100 karakteri geçemez.' }
    ]
  };

  updateForm = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.maxLength(150)]],
    gender: [''],
    relationshipStatus: [''],
    birthDate: [''],
    birthTime: [''],
    job: ['', [Validators.maxLength(100)]]
  });

  constructor(
    public router: Router,
    private service: UserService,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
  ) { 
    this.defaultBirthDate = new Date();
    this.defaultBirthDate.setHours(0, 0);
    this.defaultBirthDateString = this.defaultBirthDate.toISOString();
    this.birthTimeSet = false;
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.service.getConsumerUserInfo(this.userName).subscribe(
      (res: any) => {
        this.updateForm.controls['fullName'].setValue(res.fullName);
        this.updateForm.controls['gender'].setValue(res.gender);
        this.updateForm.controls['relationshipStatus'].setValue(res.relationshipStatus);
        this.updateForm.controls['birthDate'].setValue(res.birthDate);
        this.updateForm.controls['birthTime'].setValue(res.birthTime);
        this.updateForm.controls['job'].setValue(res.job);

        this.initialBirthTime = res.birthTime;
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }

  submit() {
    if(!this.birthTimeSet) {
      this.updateForm.value.birthTime = this.initialBirthTime;
    }

    this.service.updateUserInfo(this.updateForm.value).subscribe(
      (res: any) => {
        this.notificationService.success({Message: "Bilgileriniz üncellenmiştir.", Duration: 6000 });
        this.router.navigateByUrl('/myAccount');
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }

  birthTimeChanged() {
    this.birthTimeSet = true;
  }
}
