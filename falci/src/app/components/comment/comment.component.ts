import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'comment-component',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  @Input('feed-id') feedId: string; 
  @Input('user-full-name') userFullName: string; 
  
  commentsPageNumber = 0;
  comments: any[] = [];
  hasMoreComments = false;
  enteredComment: string;

  constructor(
    public feedService: FeedService
  ) {}

  ngOnInit() {
    this.feedService.getComments(this.feedId, this.commentsPageNumber)
      .subscribe((comments: any) => {
        for(var i = 0; i < comments.items.length; i++)
        {
          this.comments.push(comments.items[i]);
        }
        this.hasMoreComments = comments.hasNextPage;
      });
  }

  loadPreviousComments() {
    this.commentsPageNumber++;
    this.feedService.getComments(this.feedId, this.commentsPageNumber)
      .subscribe((comments: any) => {
        for(var i = 0; i < comments.items.length; i++)
        {
          this.comments.push(comments.items[i]);
        }
        this.hasMoreComments = comments.hasNextPage;
      });
  }

  submitComment(form: NgForm) {
    form.value.feedId = this.feedId;
    this.feedService.submitComment(form.value).subscribe((result: any) => {
        alert('done');
        this.comments.push({
          comment: form.value.comment,
          user: {
            fullName: this.userFullName
          },
          createDate: ''
        });
        this.enteredComment = '';
      },
      err => {
        if (err.error != null && err.error.Message)
        {
          alert(err.error.Message);
        }
        else {
          alert(JSON.stringify(err));
        }
      }
    );
  }
}
