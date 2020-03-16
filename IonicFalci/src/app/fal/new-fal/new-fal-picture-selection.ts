import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  //selector: 'new-fal-picture-selection',
  templateUrl: 'new-fal-picture-selection.html'
})
export class NewFalPictureSelection implements OnInit {
  fal: any;

  constructor(
  ) {}

  ngOnInit() {

  }

  ionViewWillEnter() {
  }
}
