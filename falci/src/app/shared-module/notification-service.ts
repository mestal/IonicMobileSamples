import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NotificationData } from './notification-data';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  
  constructor(public toastController: ToastController) { }
  defaultDuration = 3000;

  async error(data: NotificationData) {
    const toast = await this.toastController.create({
      message: data.Message,
      position: data.Position ?? 'bottom',
      duration: data.Duration ?? this.defaultDuration
    });
    await toast.present();
  }

  async info(data: NotificationData) {
    const toast = await this.toastController.create({
      message: data.Message,
      position: data.Position ?? 'bottom',
      duration: data.Duration ?? this.defaultDuration
    });
    await toast.present();
  }

  async success(data: NotificationData) {
    const toast = await this.toastController.create({
      message: data.Message,
      position: data.Position ?? 'bottom',
      duration: data.Duration ?? this.defaultDuration
    });
    await toast.present();
  }

  async warn(data: NotificationData) {
    const toast = await this.toastController.create({
      message: data.Message,
      position: data.Position ?? 'bottom',
      duration:data.Duration ?? this.defaultDuration
    });
    await toast.present();
  }
}
