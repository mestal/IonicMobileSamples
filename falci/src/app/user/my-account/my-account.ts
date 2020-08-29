import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { constants } from 'src/app/constants';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { environment } from 'src/environments/environment';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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

  private optionsGallery: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  constructor(
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    private service: UserService,
    private fortuneTellingService: FortuneTellingService,
    private camera: Camera
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

  ionViewWillEnter() { }

  loadImage() {
    this.camera.getPicture(this.optionsGallery).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      this.profilePicture = base64Image;

      const formData: FormData = new FormData();
      formData.append('Photo', this.makeblob(this.profilePicture));
      
      this.service.updateProfilePhoto(formData).subscribe(
        data => {
          console.log('done');
          alert('done');
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
     }, (err) => {
      // Handle error
      console.log(err)
     })
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
}
