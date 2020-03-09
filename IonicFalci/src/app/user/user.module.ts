import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { SharedModule } from '../shared/shared.module';

import { LoginPage } from './login/login';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

const userRoutes: Routes = [
  { path: 'login', component: LoginPage }
];

@NgModule({
  imports: [
    // SharedModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('user', reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [
    LoginPage
  ]
})
export class UserModule { }