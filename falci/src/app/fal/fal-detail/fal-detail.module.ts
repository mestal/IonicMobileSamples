import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FalDetailPage } from './fal-detail';
import { FalDetailPageRoutingModule } from './fal-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared-module/shared-module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FalDetailPageRoutingModule,
    TranslateModule,
    SharedModule
  ],
  declarations: [
    FalDetailPage,
  ]
})
export class FalDetailModule { }
