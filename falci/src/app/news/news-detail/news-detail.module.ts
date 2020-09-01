import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailPage } from './news-detail';
import { NewsDetailPageRoutingModule } from './news-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared-module/shared-module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewsDetailPageRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    NewsDetailPage,
    
  ]
})
export class NewsDetailModule { }
