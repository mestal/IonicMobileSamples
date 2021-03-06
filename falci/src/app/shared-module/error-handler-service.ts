import { Injectable } from '@angular/core';
import { NotificationService } from './notification-service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  isTestUser: any;

  constructor(public notificationService: NotificationService) { 
  }

  ngOnInit() {
    this.isTestUser = localStorage.getItem('isTestUser');
  }

  handle(error: any) {
    if (error.error != null && error.error.Code && error.error.Code != "500")
    {
      this.notificationService.error({ Message: error.error.Message });
    }
    else {
      this.isTestUser = localStorage.getItem('isTestUser');
      if(this.isTestUser == "true") {
        this.notificationService.error({ Message: JSON.stringify(error) });
      }
      else {
        this.notificationService.error({ Message: "Bir hata oluştu." });
      }
    }
  }
}
