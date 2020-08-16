import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgatPasswordPage } from './forgat-password';

const routes: Routes = [
  {
    path: '',
    component: ForgatPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgatPasswordRoutingModule { }
