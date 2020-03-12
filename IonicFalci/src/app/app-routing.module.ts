import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  
  {
    path: 'fal-detail/:falId',
    loadChildren: () => import('./fal/fal-detail/fal-detail.module').then(m => m.FalDetailModule)
  },
  {
    path: 'fallist',
    loadChildren: () => import('./fal/fal-list/fal-list.module').then(m => m.FalListModule)
  },
  {
    path: 'news-detail/:newsId',
    loadChildren: () => import('./news/news-detail/news-detail.module').then(m => m.NewsDetailModule)
  },
  {
    path: 'newsList',
    loadChildren: () => import('./news/news-list/news-list.module').then(m => m.NewsListModule),
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'newsList',
    pathMatch: 'full'
  },
  // {
  //   path: 'newsList',
  //   loadChildren: () => import('./news/news-list/news-list.module').then(m => m.NewsListModule)
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
