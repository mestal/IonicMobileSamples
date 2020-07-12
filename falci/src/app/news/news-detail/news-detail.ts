import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { FeedService } from 'src/app/services/feed.service';
import { constants } from 'src/app/constants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'page-fal-detail',
  templateUrl: 'news-detail.html',
  styleUrls: ['./news-detail.scss'],
})
export class NewsDetailPage {
  news: any;
  constants = constants;
  environment = environment;

  constructor(
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public feedService: FeedService
  ) {}

  ngOnInit() {
    const newsId = this.route.snapshot.paramMap.get('id');
    this.feedService.getNews(newsId).subscribe((news: any) => {
      this.news = news;
    });
  }

  ionViewWillEnter() {

  }
}
