import { Component } from '@angular/core';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { constants } from '../../constants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'page-falci-list',
  templateUrl: 'falci-list.html',
  styleUrls: ['./falci-list.scss'],
})
export class FalciListPage {
  fortuneTellers: any[] = [];
  constants = constants;
  environment = environment;

  constructor(public fortuneTellingService: FortuneTellingService) {}

  ionViewDidEnter() {
    this.fortuneTellingService.getActiveFortuneTellers().subscribe((fortuneTellers: any[]) => {
      this.fortuneTellers = fortuneTellers;
    });
  }
}
