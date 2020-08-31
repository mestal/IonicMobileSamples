import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyDetailPage } from './survey-detail';
import { SurveyDetailPageRoutingModule } from './survey-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from 'src/app/components/comment/comment.component';
import { LikeSummaryComponent } from 'src/app/components/like-summary/like-summary.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SurveyDetailPageRoutingModule,
    FormsModule
  ],
  declarations: [
    SurveyDetailPage,
    CommentComponent,
    LikeSummaryComponent
  ]
})
export class SurveyDetailModule { }
