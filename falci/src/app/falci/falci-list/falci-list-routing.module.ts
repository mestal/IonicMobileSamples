import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FalciListPage } from './falci-list';
const routes: Routes = [
  {
    path: '',
    component: FalciListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FalciListPageRoutingModule {}
