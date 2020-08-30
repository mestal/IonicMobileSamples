import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';
import { FeedService } from 'src/app/services/feed.service';
import { constants } from 'src/app/constants';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-survey-detail',
  templateUrl: 'survey-detail.html',
  styleUrls: ['./survey-detail.scss'],
})
export class SurveyDetailPage implements OnInit {
  survey: any;
  constants = constants;
  environment = environment;
  commentsPageNumber = 1;
  comments: any[] = [];
  hasMoreComments = false;
  userFullName: string;
  enteredComment: string;

  constructor(
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public feedService: FeedService
  ) {}

  
  ngOnInit() {
    this.userFullName = localStorage.getItem('fullName');
    const surveyId = this.route.snapshot.paramMap.get('id');
    this.feedService.getSurvey(surveyId).subscribe((survey: any) => {
      this.survey = survey;
    });

    this.feedService.getComments(surveyId, this.commentsPageNumber)
      .subscribe((comments: any) => {
        for(var i = 0; i < comments.items.length; i++)
        {
          this.comments.push(comments.items[i]);
        }
        this.hasMoreComments = comments.hasNextPage;

      });
  }

  ionViewWillEnter() {

  }

  optionSelected(question, answerOrder) {
    question.selectedAnswer = answerOrder;
  }

  submitSurvey()
  {
    for(var i = 0; i < this.survey.items.length; i ++)
    {
      if(this.survey.items[i].selectedAnswer == null)
      {
        alert("Lütfen tüm soruları cevaplayın.");
        return;
      }
    }
    var totalPoint = 0;
    for(var i = 0; i < this.survey.items.length; i ++)
    {
      for(var j = 0; j < this.survey.items[i].answers.length; j++)
      {
        if(this.survey.items[i].answers[j] == this.survey.items[i].selectedAnswer)
        {
          totalPoint = totalPoint + this.survey.items[i].questionWeight * this.survey.items[i].answers[j].answerWeight;
          break;
        }
      }
    }

    var resultFound = false;
    for(var i = 0; i < this.survey.results.length; i ++)
    {
      if(totalPoint <= this.survey.results[i].point) {
        alert(this.survey.results[i].resultInformation);
        resultFound = true;
        break;
      }
    }

    if(!resultFound) {
      alert(this.survey.results[this.survey.results[i].length - 1].resultInformation);
    }
  }

  submitComment(form: NgForm) {
    form.value.feedId = this.survey.id;
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

  loadPreviousComments() {
    this.commentsPageNumber++;
    this.feedService.getComments(this.survey.id, this.commentsPageNumber)
      .subscribe((comments: any) => {
        for(var i = 0; i < comments.items.length; i++)
        {
          this.comments.push(comments.items[i]);
        }
        this.hasMoreComments = comments.hasNextPage;
      });
  }
}
