import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { constants } from './../../constants';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
import { NotificationService } from 'src/app/shared-module/notification-service';

@Component({
  selector: 'page-fal-detail',
  templateUrl: 'fal-detail.html',
  styleUrls: ['./fal-detail.scss'],
})
export class FalDetailPage implements OnInit {
  fal: any;
  constants = constants;
  selectedRating: 0;

  constructor(
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public fortuneTellingService: FortuneTellingService,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    const falId = this.route.snapshot.paramMap.get('id');
    this.fortuneTellingService.getFortuneTelling(falId).subscribe((fal: any) => {
      var tempDate = new Date(fal.submitDateUtc);
      fal.submitDateUtc = tempDate.getTime() - tempDate.getTimezoneOffset() * 60000;

      if(!!fal.submitByFortuneTellerDateUtc) {
        var tempDate2 = new Date(fal.submitByFortuneTellerDateUtc);
        fal.submitByFortuneTellerDateUtc = tempDate2.getTime() - tempDate2.getTimezoneOffset() * 60000;
      }
      this.fal = fal;
    },
    err => {
      this.errorHandlerService.handle(err);
    });
  }

  starClicked(selectedRating) {
    this.selectedRating = selectedRating;
  }

  sendRate() {
    var request = {
      star: this.selectedRating,
      fortuneTellingId: this.fal.id
    };

    this.fortuneTellingService.rateFortuneTeller(request).subscribe((fal: any) => {
      this.fal.userStarPoint = this.selectedRating;
      this.notificationService.success({ Message: 'Puanınız alınmıştır.'});
    },
    err => {
      this.errorHandlerService.handle(err);
    });
  }
}
