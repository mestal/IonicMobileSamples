import {NgModule} from "@angular/core";
import { CommentComponent } from '../components/comment/comment.component';
import { LikeSummaryComponent } from '../components/like-summary/like-summary.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StarComponent } from '../components/star/star.component';

@NgModule({
    declarations: [ 
        CommentComponent, 
        LikeSummaryComponent,
        StarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [ 
        CommentComponent,
        LikeSummaryComponent,
        StarComponent,
        FormsModule,
        IonicModule,
    ]
})
export class SharedModule {}