import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-news-list',
  templateUrl: 'news-list.html',
  styleUrls: ['./news-list.scss'],
})
export class NewsListPage {
  newsList: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getNewsList().subscribe((newsList: any[]) => {
      this.newsList = newsList;
    });
  }
}
