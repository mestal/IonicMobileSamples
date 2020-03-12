import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-fal-list',
  templateUrl: 'fal-list.html',
  styleUrls: ['./fal-list.scss'],
})
export class FalListPage {
  fals: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getFals().subscribe((fals: any[]) => {
      this.fals = fals;
    });
  }
}
