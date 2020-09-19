import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { constants } from './../../constants';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';

@Component({
  selector: 'page-fal-detail',
  templateUrl: 'fal-detail.html',
  styleUrls: ['./fal-detail.scss'],
})
export class FalDetailPage implements OnInit {
  fal: any;
  constants = constants;

  constructor(
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public fortuneTellingService: FortuneTellingService,
    private errorHandlerService : ErrorHandlerService
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
}
