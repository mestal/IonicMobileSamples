import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NewAccountPage } from './new-account';
import { NewAccountRoutingModule } from './new-account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAccountRoutingModule
  ],
  declarations: [
    NewAccountPage,
  ]
})
export class NewAccountModule { }
