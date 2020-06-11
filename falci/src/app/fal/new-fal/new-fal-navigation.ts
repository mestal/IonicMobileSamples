import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'new-fal-navigation',
  templateUrl: 'new-fal-navigation.html'
})
export class NewFalNavigation implements OnInit {
  fal: any;

  constructor(
  ) {}

  ngOnInit() {

  }

  ionViewWillEnter() {
  }
}
