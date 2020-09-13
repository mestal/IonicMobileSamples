import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';

@Component({
  selector: 'like-summary-component',
  templateUrl: './like-summary.component.html',
  styleUrls: ['./like-summary.component.scss'],
})
export class LikeSummaryComponent implements OnInit {

  @Input('feed-id') feedId: string; 
  @Input('like-count') likeCount: number; 
  @Input('dislike-count') dislikeCount: number; 
  @Input('comment-count') commentCount: number; 
  @Input('user-name') userName: string; 
  @Input('liked-type') likedType: string;
  
  likeIcon: string;
  dislikeIcon: string;

  constructor(
    public feedService: FeedService,
    private errorHandlerService : ErrorHandlerService
  ) {}

  ngOnInit() {
    this.setIcons()
  }

  setIcons() {
    if(this.likedType == '0') {
      this.likeIcon = 'heart-outline';
      this.dislikeIcon = 'heart-dislike-outline';
    }
    else if(this.likedType == '1') {
      this.likeIcon = 'heart';
      this.dislikeIcon = 'heart-dislike-outline';
    }
    else if(this.likedType == '2') {
      this.likeIcon = 'heart-outline';
      this.dislikeIcon = 'heart-dislike';
    }
  }

  submitLike(likeType) {
    var payload = {
      feedId: this.feedId,
      likeType: likeType
    }
    this.feedService.submitLike(payload).subscribe((id: any) => {
        if(this.likedType == "0")
        {
          if(likeType == "1") {
            this.likeCount++;
          }
          else {
            this.dislikeCount++;
          }
        }
        else {
          if(likeType == "1") {
            this.likeCount++;
            this.dislikeCount--;
          }
          else {
            this.likeCount--;
            this.dislikeCount++;
          }
        }

        this.likedType = likeType;
        this.setIcons();

      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }

  removeLike(likeType) {
    var payload = {
      feedId: this.feedId,
      likeType: likeType
    }
    this.feedService.removeLike(payload).subscribe((id: any) => {
        if(likeType == "1") {
          this.likeCount--;
        }
        else {
          this.dislikeCount--;
        }

        this.likedType = "0";
        this.setIcons();
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }

  likeTypeClicked(likeType)
  {
    if(this.userName == '' || this.userName == null) {
      return;
    }

    if(this.likedType == likeType) {
      this.removeLike(likeType);
    }
    else {
      this.submitLike(likeType)
    }
  }
}
