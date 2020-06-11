import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FalciDetailPage } from './falci-detail';

const routes: Routes = [
  {
    path: '',
    component: FalciDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FalciDetailPageRoutingModule { }
