import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFalPage } from './new-fal';
import { NewFalPageRoutingModule } from './new-fal-routing.module';
import { IonicModule } from '@ionic/angular';
import { GetPhotoModalModule } from './get-photo-modal/get-photo-modal-module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewFalPageRoutingModule,
    GetPhotoModalModule
  ],
  declarations: [
    NewFalPage
  ]
})
export class NewFalModule { }
