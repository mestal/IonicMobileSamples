import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NewAccountPage } from './new-account';
import { NewAccountRoutingModule } from './new-account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewAccountRoutingModule,
  ],
  declarations: [
    NewAccountPage,
  ]
})
export class NewAccountModule { }
