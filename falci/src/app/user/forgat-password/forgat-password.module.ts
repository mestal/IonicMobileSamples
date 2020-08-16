import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ForgatPasswordPage } from './forgat-password';
import { ForgatPasswordRoutingModule } from './forgat-password-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgatPasswordRoutingModule
  ],
  declarations: [
    ForgatPasswordPage,
  ]
})
export class ForgatPasswordModule { }
