import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewAccountPage } from './new-account';

const routes: Routes = [
  {
    path: '',
    component: NewAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewAccountRoutingModule { }
