import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FalDetailPage } from './fal-detail';
import { FalDetailPageRoutingModule } from './fal-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FalDetailPageRoutingModule
  ],
  declarations: [
    FalDetailPage,
  ]
})
export class FalDetailModule { }
