import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-falci-list',
  templateUrl: 'falci-list.html',
  styleUrls: ['./falci-list.scss'],
})
export class FalciListPage {
  fortuneTellers: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getFortuneTellers().subscribe((fortuneTellers: any[]) => {
      this.fortuneTellers = fortuneTellers;
    });
  }
}
