import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'page-new-fal',
  templateUrl: 'new-fal.html',
  styleUrls: ['./new-fal.scss'],
})
export class NewFalPage implements OnInit {
  falImages: string[] = [];
  activeImageIndex = 0;

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  fal: any;
  fortuneTellers: any[] = [];
  constructor(private camera: Camera) {}

  ngOnInit() {
    this.falImages.push("assets/img/WIN_20200725_13_21_37_Pro.jpg");
    this.falImages.push("assets/img/WIN_20200725_13_22_11_Pro.jpg");
    this.falImages.push("assets/img/WIN_20200725_13_22_14_Pro.jpg");
    this.falImages.push("assets/img/WIN_20200725_13_22_17_Pro.jpg");

    this.activeImageIndex = 0;
  }

  captureImage() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.falImages[this.activeImageIndex] = base64Image;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }

  imageSelected(indexOfElement) {
    this.activeImageIndex = indexOfElement;
  }

  loadImage() {

  }

  ionViewDidEnter() {
  }
}
