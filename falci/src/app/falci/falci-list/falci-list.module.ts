import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FalciListPage } from './falci-list';
import { FalciListPageRoutingModule } from './falci-list-routing.module';
import { SharedModule } from 'src/app/shared-module/shared-module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FalciListPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [FalciListPage],
})
export class FalciListModule {}
