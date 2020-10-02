import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDreamFalPage } from './new-dream-fal';
import { NewDreamFalPageRoutingModule } from './new-dream-fal-routing.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewDreamFalPageRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewDreamFalPage
  ]
})
export class NewDreamFalModule { }
