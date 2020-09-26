import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import { UpdateProfilePictureModal } from './update-profile-picture-modal';
import { Crop } from '@ionic-native/crop/ngx';

// The modal's component of the previous chapter
@NgModule({
     declarations: [
      UpdateProfilePictureModal
     ],
     imports: [
       IonicModule,
       CommonModule,
     ],
     entryComponents: [
      UpdateProfilePictureModal
     ],
     providers: [
      Crop
     ]
})
export class UpdateProfilePictureModalModule {}