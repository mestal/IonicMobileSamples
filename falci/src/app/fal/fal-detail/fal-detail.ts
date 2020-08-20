import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';

@Component({
  selector: 'page-fal-detail',
  templateUrl: 'fal-detail.html',
  styleUrls: ['./fal-detail.scss'],
})
export class FalDetailPage implements OnInit {
  fal: any;

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

  ionViewWillEnter() {

  }
}
