import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { FeedService } from 'src/app/services/feed.service';
import { constants } from 'src/app/constants';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';

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
    public feedService: FeedService,
    private errorHandlerService : ErrorHandlerService
  ) {
  }

  ngOnInit() {
    this.newsId = this.route.snapshot.paramMap.get('id');
    this.userFullName = localStorage.getItem('fullName');
    this.userName = localStorage.getItem('userName');
    this.userRole = localStorage.getItem('role');
    this.feedService.getNews(this.newsId).subscribe((news: any) => {
      this.news = news;
    },
    err => {
      this.errorHandlerService.handle(err);
    });
  }

  commentAdded() {
    this.news.commentCount++;
  }

  commentRemoved() {
    this.news.commentCount--;
  }
}
