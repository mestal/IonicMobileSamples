import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
import { constants } from './../../constants';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';

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
  role: string;
  constants = constants;
  private initialBirthTime: Date;
  private isSubmitting = false;

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
    job: ['', [Validators.maxLength(100)]],
    description: ['']
  });

  constructor(
    public router: Router,
    private service: UserService,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private fortuneTellingService: FortuneTellingService
  ) { 
    this.defaultBirthDate = new Date();
    this.defaultBirthDate.setHours(0, 0);
    this.defaultBirthDateString = this.defaultBirthDate.toISOString();
    this.birthTimeSet = false;
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.role = localStorage.getItem('role');
    if(this.role == this.constants.userRoles.consumer) {
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
    else if(this.role == this.constants.userRoles.falci) {
      this.fortuneTellingService.getFortuneTellerByName(this.userName)
        .subscribe((result: any) => {
          this.updateForm.controls['fullName'].setValue(result.fullName);
          this.updateForm.controls['gender'].setValue(result.gender);
          this.updateForm.controls['birthDate'].setValue(result.birthDate);
          this.updateForm.controls['birthTime'].setValue(result.birthTime);
          this.updateForm.controls['description'].setValue(result.description);

          this.initialBirthTime = result.birthTime;
        }
      );
    }
  }

  submit() {
    if(!this.birthTimeSet) {
      this.updateForm.value.birthTime = this.initialBirthTime;
    }

    this.isSubmitting = true;

    this.service.updateUserInfo(this.updateForm.value).subscribe(
      (res: any) => {
        this.notificationService.success({Message: "Bilgileriniz güncellenmiştir.", Duration: 6000 });
        localStorage.setItem('fullName', this.updateForm.value.fullName);
        this.service.user.fullName = this.updateForm.value.fullName;
        this.service.user$.next(this.service.user);

        this.router.navigateByUrl('/myAccount');
      },
      err => {
        this.isSubmitting = false;
        this.errorHandlerService.handle(err);
      }
    );
  }

  birthTimeChanged() {
    this.birthTimeSet = true;
  }
}
