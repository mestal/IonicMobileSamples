import { Component } from '@angular/core';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { constants } from '../../constants';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'page-falci-list',
  templateUrl: 'falci-list.html',
  styleUrls: ['./falci-list.scss'],
})
export class FalciListPage {
  fortuneTellers: any[] = [];
  constants = constants;
  environment = environment;

  constructor(public fortuneTellingService: FortuneTellingService, private router: Router) {}

  ionViewDidEnter() {
    this.fortuneTellingService.getActiveFortuneTellers().subscribe((fortuneTellers: any[]) => {
      this.fortuneTellers = fortuneTellers;
    });
  }

  cardClicked(falci: any) {
    this.router.navigate(['/falciDetail', { id: falci.id }]);
  }
}
