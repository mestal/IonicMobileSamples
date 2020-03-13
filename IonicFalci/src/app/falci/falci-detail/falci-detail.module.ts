import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FalciDetailPage } from './falci-detail';
import { FalciDetailPageRoutingModule } from './falci-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FalciDetailPageRoutingModule
  ],
  declarations: [
    FalciDetailPage,
  ]
})
export class FalciDetailModule { }
