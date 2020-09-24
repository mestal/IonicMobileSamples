import { Component } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { constants } from 'src/app/constants';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { environment } from 'src/environments/environment';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
import { UpdateProfilePictureModal } from './update-profile-picture-modal/update-profile-picture-modal';

@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
  styleUrls: ['./my-account.scss'],
})
export class MyAccountPage {
  userInfo : any = null;
  role: any;
  constants = constants;
  userName: string;
  environment = environment;

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public service: UserService,
    private fortuneTellingService: FortuneTellingService,
    private camera: Camera,
    private errorHandlerService : ErrorHandlerService,
    private modalController: ModalController
  ) {}

  ionViewDidEnter() {
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
    else if (this.role == constants.userRoles.falci) {
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

  async openModal() {
    var image = document.getElementById('profilePic');

    //image.setAttribute('crossorigin', 'anonymous');
    // let image = new Image();
    // image.crossOrigin = "Anonymous";
    // image.src = environment.urlForAssets + constants.folderForProfilePictures + this.service.user.picturePath;

    var base64Image = null;
    
    try {
      base64Image = this.getBase64Image(image);
    }
    catch (error) {
      alert(JSON.stringify(error));
      base64Image = null;
    }
    //alert(base64Image);

    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: UpdateProfilePictureModal,
          componentProps: {
            profilePictureBase64: base64Image
          }
    });
    
    modal.onDidDismiss().then((detail) => {
       if (detail !== null && detail.data != null) {
          this.service.user.picturePath = environment.urlForAssets + constants.folderForProfilePictures + detail.data;
          localStorage.setItem('picturePath', environment.urlForAssets + constants.folderForProfilePictures + detail.data);
          //alert('user during profile update: ' + JSON.stringify(this.service.user));
          this.service.user$.next(this.service.user);
          this.userInfo.picturePath = detail.data;
       }
    });
    
    await modal.present();
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL("image/jpg");
    return dataURL;
    //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  getPicturePath() {
    // if(localStorage.getItem('picturePath') == null) {
    //   return 'defaultProfilePicture.png';
    // }
    // else {
      return localStorage.getItem('picturePath');
    // }
  }
}
