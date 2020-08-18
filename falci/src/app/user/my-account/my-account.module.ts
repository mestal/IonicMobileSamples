import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountPage } from './my-account';
import { MyAccountPageRoutingModule } from './my-account-routing.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MyAccountPageRoutingModule,
    TranslateModule
  ],
  declarations: [
    MyAccountPage
  ]
})
export class MyAccountModule { }
