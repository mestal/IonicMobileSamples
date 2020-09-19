import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { NgForm } from '@angular/forms';
import { SortByPipe } from '../sort-by-pipe';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';

@Component({
  selector: 'comment-component',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  @Input('feed-id') feedId: string; 
  @Input('user-full-name') userFullName: string; 
  @Input('user-name') userName: string; 
  @Input('user-role') userRole: string; 
  @Output('comment-add-event') commentAddEvent = new EventEmitter<any>();
  @Output('comment-remove-event') commentRemoveEvent = new EventEmitter<any>();

  commentsPageNumber = 1;
  comments: any[] = [];
  hasMoreComments = false;
  enteredComment: string;

  constructor(
    public feedService: FeedService,
    private sortByPipe: SortByPipe,
    private notificationService: NotificationService,
    private errorHandlerService : ErrorHandlerService
  ) {}

  ngOnInit() {
    this.feedService.getComments(this.feedId, this.commentsPageNumber)
      .subscribe((comments: any) => {
        for(var i = 0; i < comments.items.length; i++)
        {
          var tempDate = new Date(comments.items[i].createDate);
          comments.items[i].createDate = tempDate.getTime() - tempDate.getTimezoneOffset() * 60000;

          this.comments.push(comments.items[i]);
        }
        this.hasMoreComments = comments.hasNextPage;
        this.comments = this.sortByPipe.transform(this.comments, 'asc', 'createDate');
      });
  }

  loadPreviousComments() {
    this.commentsPageNumber++;
    this.feedService.getComments(this.feedId, this.commentsPageNumber)
      .subscribe((comments: any) => {
        for(var i = 0; i < comments.items.length; i++)
        {
          var tempDate = new Date(comments.items[i].createDate);
          comments.items[i].createDate = tempDate.getTime() - tempDate.getTimezoneOffset() * 60000;
          this.comments.push(comments.items[i]);
        }
        this.hasMoreComments = comments.hasNextPage;
        this.comments = this.sortByPipe.transform(this.comments, 'asc', 'createDate');
      });
  }

  submitComment(form: NgForm) {
    form.value.feedId = this.feedId;
    this.feedService.submitComment(form.value).subscribe((id: any) => {
      this.notificationService.success({ Message: "Yorum gönderildi." });
        var comment = {
          comment: form.value.comment,
          id: id,
          user: {
            fullName: this.userFullName,
            userName: this.userName
          },
          createDate: new Date()
        };

        this.comments.push(comment);
        this.enteredComment = '';
        this.commentAddEvent.emit(comment);
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }

  removeComment(comment: any) {
    this.feedService.removeComment({ commentId: comment.id}).subscribe((result: any) => {
        this.notificationService.success({ Message: "Yorum silindi." });
        this.comments = this.comments.filter(item => item !== comment);
        this.commentRemoveEvent.emit(comment);
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }
}
