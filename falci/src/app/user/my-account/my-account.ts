import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
  styleUrls: ['./my-account.scss'],
})
export class MyAccountPage implements OnInit {
  falci: any;
  currentUser : any = null;

  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {

  }

  openExternalUrl(url: string) {
  }

  async openFalShare(falci: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + falci.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + falci.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + falci.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(falci: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + falci.name,
      buttons: [
        {
          text: `Email ( ${falci.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + falci.email);
          }
        },
        {
          text: `Call ( ${falci.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + falci.phone);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }
}
