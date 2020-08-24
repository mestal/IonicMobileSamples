import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FalListPage } from './fal-list';
const routes: Routes = [
  {
    path: '',
    component: FalListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FalListPageRoutingModule {}
