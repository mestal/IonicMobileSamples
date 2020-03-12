import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
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
    loadChildren: () => import('./news/news-list/news-list.module').then(m => m.NewsListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
