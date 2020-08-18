import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
  styleUrls: ['./my-account.scss'],
})
export class MyAccountPage implements OnInit {
  userInfo : any = null;

  constructor(
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    private service: UserService
  ) {}

  ngOnInit() {
    var userName = localStorage.getItem('userName');
    this.service.getConsumerUserInfo(userName).subscribe((result: any) => {
      this.userInfo = result;
    });
  }

  ionViewWillEnter() {

  }
}
