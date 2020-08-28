import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChangePasswordPage } from './change-password';
import { ChangePasswordRoutingModule } from './change-password-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePasswordRoutingModule
  ],
  declarations: [
    ChangePasswordPage,
  ]
})
export class ChangePasswordModule { }
