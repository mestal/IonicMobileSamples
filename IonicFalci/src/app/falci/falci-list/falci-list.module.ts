import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FalciListPage } from './falci-list';
import { FalciListPageRoutingModule } from './falci-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FalciListPageRoutingModule
  ],
  declarations: [FalciListPage],
})
export class FalciListModule {}
