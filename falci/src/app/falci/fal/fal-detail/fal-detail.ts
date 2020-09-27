import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { constants } from '../../../constants';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { SubmitFortuneTellerComment } from '../../../interfaces/submitFortuneTellerComment';
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
  commentSubmitting = false;

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

  submitComment(form: NgForm) {
    if(form.value.comment == null || form.value.comment.trim() == "") {
      return;
    }
    this.commentSubmitting = true;
    form.value.fortuneTellingId = this.fal.id;
    this.fortuneTellingService.submitByFortuneTeller(form.value).subscribe((result: any) => {
        this.notificationService.success({Message: "Yanıtınız gönderilmiştir." });
        this.commentSubmitting = false;
        this.router.navigateByUrl('/fortuneTellerFals?refresh=true');
      },
      err => {
        this.commentSubmitting = false;
        this.errorHandlerService.handle(err);
      }
    );
  }

  imageSelected(indexOfElement) {
    this.activeImageIndex = indexOfElement;
  }
}
