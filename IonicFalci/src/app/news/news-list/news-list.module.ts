import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NewsListPage } from './news-list';
import { NewsListPageRoutingModule } from './news-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewsListPageRoutingModule
  ],
  declarations: [NewsListPage],
})
export class NewsListModule {}
