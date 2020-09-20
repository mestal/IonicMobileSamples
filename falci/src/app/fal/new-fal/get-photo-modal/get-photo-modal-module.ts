import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import { GetPhotoModal } from './get-photo-modal';
// The modal's component of the previous chapter
@NgModule({
     declarations: [
      GetPhotoModal
     ],
     imports: [
       IonicModule,
       CommonModule
     ],
     entryComponents: [
      GetPhotoModal
     ]
})
export class GetPhotoModalModule {}