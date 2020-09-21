import { Component } from '@angular/core';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';

@Component({
  selector: 'page-fal-list',
  templateUrl: 'fal-list.html',
  styleUrls: ['./fal-list.scss'],
})
export class FalListPage {
  fals: any[] = [];
  pageIndex;
  hasNextPage: false;

  constructor(
    public fortuneTellingService: FortuneTellingService, 
    private router: Router,
    private errorHandlerService : ErrorHandlerService,
    private route: ActivatedRoute
  ) {}

  ionViewDidEnter() {
    const refreshInfo = this.route.snapshot.queryParamMap.get('refresh');
    if(refreshInfo == "true") {
      this.fals = [];
      this.pageIndex = 1;
    }

    if(this.fals == null || this.fals.length == 0) {
      this.loadItems(null);
    }
  }

  loadItems(scrollEvent) {
    var query = {
      Args: {
        PageIndex: this.pageIndex == null ? 1 : this.pageIndex,
        PageSize: 6,
        PagingStrategy: 1,
      }
    };

    this.fortuneTellingService.getFortuneTellings(query).subscribe((fals: any) => {
      if(fals == null || fals.items == null || fals.items.length == 0)
      {
        this.hasNextPage = false;
        return;
      }

      for(var i = 0; i < fals.items.length; i++)
      {
        var tempDate = new Date(fals.items[i].submitDateUtc);
        fals.items[i].submitDateUtc = tempDate.getTime() - tempDate.getTimezoneOffset() * 60000;

        this.fals.push(fals.items[i]);
      }
      
      this.hasNextPage = fals.hasNextPage;
      this.pageIndex = fals.pageIndex;
      if(scrollEvent)
      {
        scrollEvent.target.complete();
      }
    },
    err => {
      this.errorHandlerService.handle(err);
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

  cardClicked(fal: any) {
    this.router.navigate(['/falDetail', { id: fal.id }]);
  }
}
