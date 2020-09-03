import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PointListPage } from './point-list';
const routes: Routes = [
  {
    path: '',
    component: PointListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsListPageRoutingModule {}
