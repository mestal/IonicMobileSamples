import { Component } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { constants } from 'src/app/constants';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'page-news-list',
  templateUrl: 'news-list.html',
  styleUrls: ['./news-list.scss'],
})
export class NewsListPage {
  newsList: any[] = [];
  pageIndex;
  hasNextPage: false;
  constants = constants;
  environment = environment;

  constructor(public feedService: FeedService, private router: Router) {}


  ionViewDidEnter() {
    this.loadItems(null);
  }

  loadItems(scrollEvent) {
    var query = {
      Args: {
        PageIndex: this.pageIndex == null ? 1 : this.pageIndex,
        PageSize: 3,
        PagingStrategy: 1,
      }
    };

    this.feedService.getFeeds(query).subscribe((newsList: any) => {
      if(newsList == null || newsList.items == null || newsList.items.length == 0)
      {
        this.hasNextPage = false;
        return;
      }

      for(var i = 0; i < newsList.items.length; i++)
      {
        this.newsList.push(newsList.items[i]);
      }
      
      this.hasNextPage = newsList.hasNextPage;
      this.pageIndex = newsList.pageIndex;
      if(scrollEvent)
      {
        scrollEvent.target.complete();
      }
    });
  }

  loadMoreItems(event) {
    if(this.hasNextPage) {
      this.pageIndex++;
      this.loadItems(event);
    }
    else {
      event.target.complete();
    }
  }

  cardClicked(feed: any) {
    if(feed.feedType == constants.feedTypeNews)
    {
      this.router.navigate(['/news', { id: feed.id }]);
    }
    else if(feed.feedType == constants.feedTypeSurvey) {
      this.router.navigate(['/survey', { id: feed.id }]);
    }
    else {

    }
  }
}
