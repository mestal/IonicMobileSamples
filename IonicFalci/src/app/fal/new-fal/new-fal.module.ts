import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewFalPage } from './new-fal';
import { NewFalPageRoutingModule } from './new-fal-routing.module';
import { IonicModule } from '@ionic/angular';
import { NewFalNavigation } from './new-fal-navigation';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    //NewFalPageRoutingModule
    RouterModule.forChild([
      { path: 'new-fal', component: NewFalPage }

      
    ]),
  ],
  declarations: [
    NewFalPage,
    NewFalNavigation
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NewFalModule { }
