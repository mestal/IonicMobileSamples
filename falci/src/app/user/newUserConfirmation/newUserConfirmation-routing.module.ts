import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewUserConfirmationPage } from './newUserConfirmation';

const routes: Routes = [
  {
    path: '',
    component: NewUserConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewUserConfirmationRoutingModule { }
