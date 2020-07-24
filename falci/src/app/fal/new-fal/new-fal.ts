import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'page-new-fal',
  templateUrl: 'new-fal.html',
  styleUrls: ['./new-fal.scss'],
})
export class NewFalPage implements OnInit {
  clickedImage: string;

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  fal: any;
  fortuneTellers: any[] = [];
  constructor(
    private camera: Camera
    ) 
  {
  }

  ngOnInit() {

  }

  captureImage() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }

  

  

  ionViewDidEnter() {
    // this.confData.getFortuneTellers().subscribe((fortuneTellers: any[]) => {
    //   this.fortuneTellers = fortuneTellers;
    // });
  }
}
