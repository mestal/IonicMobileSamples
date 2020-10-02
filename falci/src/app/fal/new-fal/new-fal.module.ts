import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFalPage } from './new-fal';
import { NewFalPageRoutingModule } from './new-fal-routing.module';
import { IonicModule } from '@ionic/angular';
import { GetPhotoModalModule } from './get-photo-modal/get-photo-modal-module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewFalPageRoutingModule,
    GetPhotoModalModule,
    TranslateModule
  ],
  declarations: [
    NewFalPage
  ]
})
export class NewFalModule { }
