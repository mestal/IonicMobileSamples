import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { constants } from './constants';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedMenuItem = 'mainPage';
  constants = constants;
  environment = environment;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private translate: TranslateService,
    public userService: UserService
  ) {
    translate.setDefaultLang('tr');
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      //this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    if(localStorage.getItem('role') != null) {
      this.userService.user = {
          userName: localStorage.getItem('userName'),
          picturePath: localStorage.getItem('picturePath'),
          fullName: localStorage.getItem('fullName'),
          role: localStorage.getItem('role'),
          token: localStorage.getItem('token'),
          isTestUser: localStorage.getItem('isTestUser')
      }
    }

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('fullName');
    localStorage.removeItem('role');
    localStorage.removeItem('isTestUser');
    localStorage.removeItem('picturePath');
    this.userService.user = null;
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() : string {
    return localStorage.getItem('role');
  }
}
