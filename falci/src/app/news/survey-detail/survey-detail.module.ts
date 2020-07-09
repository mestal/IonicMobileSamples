import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyDetailPage } from './survey-detail';
import { SurveyDetailPageRoutingModule } from './survey-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SurveyDetailPageRoutingModule
  ],
  declarations: [
    SurveyDetailPage,
  ]
})
export class SurveyDetailModule { }
