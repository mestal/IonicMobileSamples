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
  userFullName: string;
  newsId: string;
  userName: string;
  userRole: string;

  constructor(
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public feedService: FeedService
  ) {}

  ngOnInit() {
    this.newsId = this.route.snapshot.paramMap.get('id');
    this.userFullName = localStorage.getItem('fullName');
    this.userName = localStorage.getItem('userName');
    this.userRole = localStorage.getItem('role');
    this.feedService.getNews(this.newsId).subscribe((news: any) => {
      this.news = news;
    });
  }
}
