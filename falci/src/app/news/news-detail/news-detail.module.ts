import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailPage } from './news-detail';
import { NewsDetailPageRoutingModule } from './news-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { CommentComponent } from 'src/app/components/comment/comment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewsDetailPageRoutingModule,
    FormsModule
  ],
  declarations: [
    NewsDetailPage,
    CommentComponent
  ]
})
export class NewsDetailModule { }
