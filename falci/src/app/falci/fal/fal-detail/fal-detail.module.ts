import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FalDetailPage } from './fal-detail';
import { FalDetailPageRoutingModule } from './fal-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FalDetailPageRoutingModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [
    FalDetailPage,
  ]
})
export class FalDetailModule { }
