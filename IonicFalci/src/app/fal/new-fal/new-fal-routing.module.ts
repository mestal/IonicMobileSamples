import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewFalPage } from './new-fal';

const routes: Routes = [
   { path: '', component: NewFalPage },
  { path: 'NewFalPictureSelection', component: NewFalPage },
  { path: 'NewFalTypeSelection', component: NewFalPage },
  { path: 'NewFalFalciSelection', component: NewFalPage },
  { path: 'NewFalSubmit', component: NewFalPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFalPageRoutingModule { }
