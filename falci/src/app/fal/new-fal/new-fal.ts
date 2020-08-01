import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';

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
  constructor(private camera: Camera, private fortuneTellingService: FortuneTellingService) {}

  ngOnInit() {
    this.falImages.push("assets/img/no-image.jpg");
    this.falImages.push("assets/img/no-image.jpg");
    this.falImages.push("assets/img/no-image.jpg");
    this.falImages.push("assets/img/no-image.jpg");

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

  submit() {

    const formData: FormData = new FormData();
    formData.append('Pictures', this.makeblob(this.falImages[0]), "ImageName");
    formData.append('FortuneTellerId', "A17DD253-A153-4E25-BA4D-08D8272C5223");

    this.fortuneTellingService.submitFortuneTelling(formData).subscribe(
      data => {
        console.log('done');
      }
    );
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
