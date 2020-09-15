import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdateAccountPage } from './update-account';

const routes: Routes = [
  {
    path: '',
    component: UpdateAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAccountRoutingModule { }
