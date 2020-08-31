import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NewsListPage } from './news-list';
import { NewsListPageRoutingModule } from './news-list-routing.module';
import { LikeSummaryComponent } from 'src/app/components/like-summary/like-summary.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewsListPageRoutingModule
  ],
  declarations: [NewsListPage, LikeSummaryComponent],
})
export class NewsListModule {}
