import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UpdateAccountPage } from './update-account';
import { UpdateAccountRoutingModule } from './update-account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateAccountRoutingModule,
  ],
  declarations: [
    UpdateAccountPage,
  ]
})
export class UpdateAccountModule { }
