import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { constants } from '../../../constants';
import { NgForm } from '@angular/forms';
import { SubmitFortuneTellerComment } from '../../../interfaces/submitFortuneTellerComment';
import { environment } from 'src/environments/environment';

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
    public fortuneTellingService: FortuneTellingService
  ) {}

  ngOnInit() {
    const falId = this.route.snapshot.paramMap.get('id');
    this.fortuneTellingService.getFortuneTelling(falId).subscribe((fal: any) => {
      this.fal = fal;
    });
  }

  submitComment(form: NgForm) {
    form.value.fortuneTellingId = this.fal.id;
    this.fortuneTellingService.submitByFortuneTeller(form.value).subscribe((result: any) => {
        alert('done');
      },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }

  imageSelected(indexOfElement) {
    this.activeImageIndex = indexOfElement;
  }
}
