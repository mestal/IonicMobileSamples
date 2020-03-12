import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsListPage } from './news-list';
const routes: Routes = [
  {
    path: '',
    component: NewsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsListPageRoutingModule {}
