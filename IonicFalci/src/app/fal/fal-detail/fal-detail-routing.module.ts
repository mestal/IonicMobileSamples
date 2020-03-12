import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FalDetailPage } from './fal-detail';

const routes: Routes = [
  {
    path: '',
    component: FalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FalDetailPageRoutingModule { }
