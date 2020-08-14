import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NewUserConfirmationPage } from './newUserConfirmation';
import { NewUserConfirmationRoutingModule } from './newUserConfirmation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewUserConfirmationRoutingModule
  ],
  declarations: [
    NewUserConfirmationPage,
  ]
})
export class NewUserConfirmationModule { }
