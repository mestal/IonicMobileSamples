import { Component } from '@angular/core';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-fal-list-for-falci',
  templateUrl: 'fal-list.html',
  styleUrls: ['./fal-list.scss'],
})
export class FalListPage {
  fals: any[] = [];
  pageIndex;
  hasNextPage: false;

  constructor(public fortuneTellingService: FortuneTellingService, private router: Router) {}

  ionViewDidEnter() {
    this.loadItems(null);
  }

  loadItems(scrollEvent) {
    var query = {
      Args: {
        PageIndex: this.pageIndex == null ? 1 : this.pageIndex,
        PageSize: 6,
        PagingStrategy: 1,
      }
    };

    this.fortuneTellingService.getFalciFortuneTellings(query).subscribe((fals: any) => {
      if(fals == null || fals.items == null || fals.items.length == 0)
      {
        this.hasNextPage = false;
        return;
      }

      for(var i = 0; i < fals.items.length; i++)
      {
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
      if (err.error != null && err.error.Message)
      {
        alert(err.error.Message);
      }
      else {
        alert(JSON.stringify(err));
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

  cardClicked(fal: any) {
    this.router.navigate(['/falDetailForFalci', { id: fal.id }]);
  }
}
