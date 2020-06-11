import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountPage } from './my-account';
import { MyAccountPageRoutingModule } from './my-account-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MyAccountPageRoutingModule
  ],
  declarations: [
    MyAccountPage
  ]
})
export class MyAccountModule { }
