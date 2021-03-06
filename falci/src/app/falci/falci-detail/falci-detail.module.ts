import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FalciDetailPage } from './falci-detail';
import { FalciDetailPageRoutingModule } from './falci-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared-module/shared-module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FalciDetailPageRoutingModule,
    TranslateModule,
    SharedModule
  ],
  declarations: [
    FalciDetailPage,
  ]
})
export class FalciDetailModule { }
