import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'page-fal-detail',
  templateUrl: 'fal-detail.html',
  styleUrls: ['./fal-detail.scss'],
})
export class FalDetailPage implements OnInit {
  fal: any;

  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
  ) {}

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const falId = this.route.snapshot.paramMap.get('falId');
      if (data && data.fals) {
        for (const fal of data.fals) {
          if (fal && fal.id === falId) {
            this.fal = fal;
            break;
          }
        }
      }
    });
  }

  openExternalUrl(url: string) {
  }

  async openFalShare(fal: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + fal.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + fal.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + fal.twitter
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

  async openContact(fal: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + fal.name,
      buttons: [
        {
          text: `Email ( ${fal.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + fal.email);
          }
        },
        {
          text: `Call ( ${fal.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + fal.phone);
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
