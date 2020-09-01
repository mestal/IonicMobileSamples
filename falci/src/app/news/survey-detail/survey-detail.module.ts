import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyDetailPage } from './survey-detail';
import { SurveyDetailPageRoutingModule } from './survey-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared-module/shared-module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SurveyDetailPageRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SurveyDetailPage
  ]
})
export class SurveyDetailModule { }
