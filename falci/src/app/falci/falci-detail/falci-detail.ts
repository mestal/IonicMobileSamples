import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { constants } from '../../constants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'page-falci-detail',
  templateUrl: 'falci-detail.html',
  styleUrls: ['./falci-detail.scss'],
})
export class FalciDetailPage implements OnInit {
  falci: any;
  constants = constants;
  environment = environment;

  constructor(
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public fortuneTellingService: FortuneTellingService
  ) {}

  ngOnInit() { }

  ionViewWillEnter() {
    const falciId = this.route.snapshot.paramMap.get('id');
    this.fortuneTellingService.getFortuneTeller(falciId).subscribe((falci: any) => {
      this.falci = falci;
    });
  }
}
