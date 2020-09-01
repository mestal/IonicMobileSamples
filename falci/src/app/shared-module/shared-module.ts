import {NgModule} from "@angular/core";
import { CommentComponent } from '../components/comment/comment.component';
import { LikeSummaryComponent } from '../components/like-summary/like-summary.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [ 
        CommentComponent, 
        LikeSummaryComponent 
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [ 
        CommentComponent,
        LikeSummaryComponent,
        FormsModule,
        IonicModule,
    ]
})
export class SharedModule {}