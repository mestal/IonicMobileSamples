import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { constants } from 'src/app/constants';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { environment } from 'src/environments/environment';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { UpdateProfilePictureModal } from './update-profile-picture-modal/update-profile-picture-modal';

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
  profilePicture: string;

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  constructor(
    public actionSheetCtrl: ActionSheetController,
    private service: UserService,
    private fortuneTellingService: FortuneTellingService,
    private camera: Camera,
    private errorHandlerService : ErrorHandlerService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.role = localStorage.getItem('role');
    if(this.role == constants.userRoles.consumer) {
      this.service.getConsumerUserInfo(this.userName).subscribe((result: any) => {
        this.userInfo = result;
      },
      err => {
        this.errorHandlerService.handle(err);
      });
    }
    else {
      this.fortuneTellingService.getFortuneTellerByName(this.userName).subscribe((result: any) => {
        this.userInfo = result;
      },
      err => {
        this.errorHandlerService.handle(err);
      });
    }
  }

  ionViewWillEnter() { }

  loadImage() {
    this.openModal();
  }

  makeblob(dataURL) {
    const BASE64_MARKER = ';base64,';
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

  async openModal() {
    //var base64Image = this.imageUrlToBase64('profilePic');
    var base64Image = "";
    if(this.profilePicture != null) {
      base64Image = this.profilePicture;
    }
    else {
      base64Image = this.getBase64Image(document.getElementById('profilePic'));
    }

    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: UpdateProfilePictureModal,
          componentProps: {
            profilePictureBase64: base64Image
          }
    });
     
    modal.onDidDismiss().then((detail) => {
       if (detail !== null) {
         this.profilePicture = detail.data;
       }
    });
    
    await modal.present();
  }

  imageUrlToBase64(elementName) {
    var c = document.createElement('canvas');
    var img = document.getElementById(elementName) as CanvasImageSource;
    var ctx = c.getContext('2d');
    c.height = img.height as number;
    c.width = img.width as number;
    ctx.drawImage(img, 0, 0, c.width, c.height);
    return c.toDataURL();
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/jpg");
    return dataURL;
    //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
}
