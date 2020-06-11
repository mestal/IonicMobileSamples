import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFalPage } from './new-fal';
import { NewFalPageRoutingModule } from './new-fal-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewFalPageRoutingModule
  ],
  declarations: [
    NewFalPage
  ]
})
export class NewFalModule { }
