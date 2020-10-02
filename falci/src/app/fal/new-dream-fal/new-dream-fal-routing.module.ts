import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewDreamFalPage } from './new-dream-fal';

const routes: Routes = [
   { path: '', component: NewDreamFalPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDreamFalPageRoutingModule { }
