import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PointListPage } from './point-list';
import { NewsListPageRoutingModule } from './point-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewsListPageRoutingModule
  ],
  declarations: [PointListPage],
})
export class PointListModule {}
