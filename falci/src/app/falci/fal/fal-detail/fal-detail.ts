import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { constants } from '../../../constants';
import { NgForm } from '@angular/forms';
import { SubmitFortuneTellerComment } from '../../../interfaces/submitFortuneTellerComment';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';

@Component({
  selector: 'page-fal-detail-for-falci',
  templateUrl: 'fal-detail.html',
  styleUrls: ['./fal-detail.scss'],
})
export class FalDetailPage implements OnInit {
  fal: any;
  activeImageIndex = 0;
  constants = constants;
  submitFortuneTellerComment: SubmitFortuneTellerComment = { comment: '', fortuneTellingId: '' };
  environment = environment;

  constructor(
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public fortuneTellingService: FortuneTellingService,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService,
    public router: Router
  ) {}

  ngOnInit() {
    const falId = this.route.snapshot.paramMap.get('id');
    this.fortuneTellingService.getFortuneTelling(falId).subscribe((fal: any) => {
      this.fal = fal;
    },
    err => {
      this.errorHandlerService.handle(err);
    });
  }

  submitComment(form: NgForm) {
    form.value.fortuneTellingId = this.fal.id;
    this.fortuneTellingService.submitByFortuneTeller(form.value).subscribe((result: any) => {
      this.notificationService.success({Message: "Yanıtınız gönderilmiştir." });
      this.router.navigateByUrl('/fortuneTellerFals');
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }

  imageSelected(indexOfElement) {
    this.activeImageIndex = indexOfElement;
  }
}
