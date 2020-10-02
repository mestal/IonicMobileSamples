import { Component, OnInit } from '@angular/core';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-new-deram-fal',
  templateUrl: 'new-dream-fal.html',
  styleUrls: ['./new-dream-fal.scss'],
})
export class NewDreamFalPage implements OnInit {
  submitting = false;

  fal: any;
  fortuneTellers: any;
  selectedFalciId: string;
  selectedType: string;
  falType: string = 'DreamInterpretation';
  userinput: string;

  dreamInterpretationForm = this.formBuilder.group({
    FortuneTellerId: ['', [Validators.required]], 
    UserInput: ['', [Validators.required]]
  });

  constructor(
    private fortuneTellingService: FortuneTellingService,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService,
    public router: Router,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {

    var falciRequest = {
      fortuneTellingType: this.falType
    };

    this.fortuneTellingService.getActiveFortuneTellersByType(falciRequest).subscribe(
      data => {
        this.fortuneTellers = data;
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }

  submit() {
    this.submitting = true;

    const formData: FormData = new FormData();

    formData.append('FortuneTellerId', this.dreamInterpretationForm.value.FortuneTellerId);
    formData.append('FortuneTellingType', this.falType);
    formData.append('UserInput', this.dreamInterpretationForm.value.UserInput);

    this.fortuneTellingService.submitFortuneTelling(formData).subscribe(
      data => {
        this.submitting = false;
        this.notificationService.success({Message: "Bilgileriniz alınmıştır. En kısa sürede yanıtlanacaktır." });
        this.router.navigateByUrl('/myFals?refresh=true');
      },
      err => {
        this.submitting = false;
        this.errorHandlerService.handle(err);
      }
    );
  }

  // onSelectedFalciChanged($event){ 
  //   this.selectedFalciId = $event.target.value;
  // }
}
