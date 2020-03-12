import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailPage } from './news-detail';
import { NewsDetailPageRoutingModule } from './news-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewsDetailPageRoutingModule
  ],
  declarations: [
    NewsDetailPage,
  ]
})
export class NewsDetailModule { }
