import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyDetailPage } from './survey-detail';
import { SurveyDetailPageRoutingModule } from './survey-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SurveyDetailPageRoutingModule,
    FormsModule
  ],
  declarations: [
    SurveyDetailPage,
  ]
})
export class SurveyDetailModule { }
