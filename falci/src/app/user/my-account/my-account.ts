import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { constants } from 'src/app/constants';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
  styleUrls: ['./my-account.scss'],
})
export class MyAccountPage implements OnInit {
  userInfo : any = null;
  role: any;
  constants = constants;
  userName: string;
  environment = environment;
  
  constructor(
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    private service: UserService,
    private fortuneTellingService: FortuneTellingService
  ) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.role = localStorage.getItem('role');
    if(this.role == constants.userRoles.consumer) {
      this.service.getConsumerUserInfo(this.userName).subscribe((result: any) => {
        this.userInfo = result;
      });
    }
    else {
      this.fortuneTellingService.getFortuneTellerByName(this.userName).subscribe((result: any) => {
        this.userInfo = result;
      });
    }
  }

  ionViewWillEnter() {

  }
}
