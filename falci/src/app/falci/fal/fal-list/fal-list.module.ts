import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FalListPage } from './fal-list';
import { FalListPageRoutingModule } from './fal-list-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FalListPageRoutingModule,
    TranslateModule
  ],
  declarations: [FalListPage],
})
export class FalListModule {}
