import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login';
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
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    LoginPage
  ]
})
export class UserModule { }