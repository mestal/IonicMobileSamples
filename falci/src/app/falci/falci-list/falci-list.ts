import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';

@Component({
  selector: 'page-falci-list',
  templateUrl: 'falci-list.html',
  styleUrls: ['./falci-list.scss'],
})
export class FalciListPage {
  fortuneTellers: any[] = [];

  constructor(public fortuneTellingService: FortuneTellingService) {}

  ionViewDidEnter() {
    this.fortuneTellingService.getActiveFortuneTellers().subscribe((fortuneTellers: any[]) => {
      this.fortuneTellers = fortuneTellers;
    });
  }
}
