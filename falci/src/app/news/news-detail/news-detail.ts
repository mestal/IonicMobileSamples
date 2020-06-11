import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-fal-detail',
  templateUrl: 'news-detail.html',
  styleUrls: ['./news-detail.scss'],
})
export class NewsDetailPage {
  news: any;

  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    //public inAppBrowser: InAppBrowser,
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const newsId = this.route.snapshot.paramMap.get('newsId');
      if (data && data.newsList) {
        for (const news of data.newsList) {
          if (news && news.id === newsId) {
            this.news = news;
            break;
          }
        }
      }
    });
  }

  // openExternalUrl(url: string) {
  //   this.inAppBrowser.create(
  //     url,
  //     '_blank'
  //   );
  // }

  async openFalShare(news: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + news.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + news.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + news.twitter
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

  async openContact(news: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + news.name,
      buttons: [
        {
          text: `Email ( ${news.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + news.email);
          }
        },
        {
          text: `Call ( ${news.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + news.phone);
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
