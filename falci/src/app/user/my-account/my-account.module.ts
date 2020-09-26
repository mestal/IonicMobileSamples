import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountPage } from './my-account';
import { MyAccountPageRoutingModule } from './my-account-routing.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { UpdateProfilePictureModalModule } from './update-profile-picture-modal/update-profile-picture-modal-module';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MyAccountPageRoutingModule,
    TranslateModule,
    UpdateProfilePictureModalModule
  ],
  declarations: [
    MyAccountPage
  ],
  providers: [
    File
  ]
})
export class MyAccountModule { }
