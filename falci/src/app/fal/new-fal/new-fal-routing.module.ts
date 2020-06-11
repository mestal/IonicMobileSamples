import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewFalPage } from './new-fal';

const routes: Routes = [
   { path: '', component: NewFalPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFalPageRoutingModule { }
