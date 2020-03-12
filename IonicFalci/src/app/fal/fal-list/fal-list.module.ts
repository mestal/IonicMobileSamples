import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FalListPage } from './fal-list';
import { FalListPageRoutingModule } from './fal-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FalListPageRoutingModule
  ],
  declarations: [FalListPage],
})
export class FalListModule {}
