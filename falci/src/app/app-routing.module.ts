import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainPage',
    pathMatch: 'full'
  },
  {
    path: 'newfal',
    loadChildren: () => import('./fal/new-fal/new-fal.module').then( m => m.NewFalModule)
  },
  {
    path: 'newdreamfal',
    loadChildren: () => import('./fal/new-dream-fal/new-dream-fal.module').then( m => m.NewDreamFalModule)
  },
  {
    path: 'mainPage',
    loadChildren: () => import('./news/news-list/news-list.module').then( m => m.NewsListModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'falciList',
    loadChildren: () => import('./falci/falci-list/falci-list.module').then( m => m.FalciListModule)
  },
  {
    path: 'myFals',
    loadChildren: () => import('./fal/fal-list/fal-list.module').then( m => m.FalListModule)
  },
  {
    path: 'fortuneTellerFals',
    loadChildren: () => import('./falci/fal/fal-list/fal-list.module').then( m => m.FalListModule)
  },
  {
    path: 'survey',
    loadChildren: () => import('./news/survey-detail/survey-detail.module').then( m => m.SurveyDetailModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news-detail/news-detail.module').then( m => m.NewsDetailModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./user/new-account/new-account.module').then( m => m.NewAccountModule)
  },
  {
    path: 'newUserConfirmation',
    loadChildren: () => import('./user/newUserConfirmation/newUserConfirmation.module').then( m => m.NewUserConfirmationModule)
  },
  {
    path: 'forgatPassword',
    loadChildren: () => import('./user/forgat-password/forgat-password.module').then( m => m.ForgatPasswordModule)
  },
  {
    path: 'resetPassword',
    loadChildren: () => import('./user/reset-password/reset-password.module').then( m => m.ResetPasswordModule)
  },
  {
    path: 'myAccount',
    loadChildren: () => import('./user/my-account/my-account.module').then( m => m.MyAccountModule)
  },
  {
    path: 'falDetail',
    loadChildren: () => import('./fal/fal-detail/fal-detail.module').then( m => m.FalDetailModule)
  },
  {
    path: 'falDetailForFalci',
    loadChildren: () => import('./falci/fal/fal-detail/fal-detail.module').then( m => m.FalDetailModule)
  },
  {
    path: 'falciDetail',
    loadChildren: () => import('./falci/falci-detail/falci-detail.module').then( m => m.FalciDetailModule)
  },
  {
    path: 'changePassword',
    loadChildren: () => import('./user/change-password/change-password.module').then( m => m.ChangePasswordModule)
  },
  {
    path: 'pointList',
    loadChildren: () => import('./point/point-list/point-list.module').then( m => m.PointListModule)
  },
  {
    path: 'updateAccount',
    loadChildren: () => import('./user/update-account/update-account.module').then( m => m.UpdateAccountModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
