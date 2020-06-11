import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'page-new-fal',
  templateUrl: 'new-fal.html',
  styleUrls: ['./new-fal.scss'],
})
export class NewFalPage implements OnInit {
  fal: any;
  fortuneTellers: any[] = [];
  constructor(public confData: ConferenceData) {}

  ngOnInit() {

  }

  

  

  ionViewDidEnter() {
    this.confData.getFortuneTellers().subscribe((fortuneTellers: any[]) => {
      this.fortuneTellers = fortuneTellers;
    });
  }
}
