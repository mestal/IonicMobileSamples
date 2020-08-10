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

  private optionsGallery: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  fal: any;
  fortuneTellers: any;
  selectedFalciId: string;
  selectedType: string;
  constructor(private camera: Camera, private fortuneTellingService: FortuneTellingService) {}

  ngOnInit() {
    this.falImages.push("assets/img/no-image.jpg");
    this.falImages.push("assets/img/no-image.jpg");
    this.falImages.push("assets/img/no-image.jpg");
    this.falImages.push("assets/img/no-image.jpg");

    this.activeImageIndex = 0;

    this.fortuneTellingService.getActiveFortuneTellers().subscribe(
      data => {
        this.fortuneTellers = data;
      }
    );
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
    this.camera.getPicture(this.optionsGallery).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      this.falImages[this.activeImageIndex] = base64Image;
     }, (err) => {
      // Handle error
      console.log(err)
     })
  }

  ionViewDidEnter() {
  }

  submit() {

    const formData: FormData = new FormData();
    if(this.falImages[0] != "assets/img/no-image.jpg") {
      formData.append('Pictures', this.makeblob(this.falImages[0]));
    }
    if(this.falImages[1] != "assets/img/no-image.jpg") {
      formData.append('Pictures', this.makeblob(this.falImages[1]));
    }
    if(this.falImages[2] != "assets/img/no-image.jpg") {
      formData.append('Pictures', this.makeblob(this.falImages[2]));
    }
    if(this.falImages[3] != "assets/img/no-image.jpg") {
      formData.append('Pictures', this.makeblob(this.falImages[3]));
    }
    
    formData.append('FortuneTellerId', this.selectedFalciId);
    formData.append('Type', this.selectedType);

    this.fortuneTellingService.submitFortuneTelling(formData).subscribe(
      data => {
        console.log('done');
        alert('done');
      },
      error => {
        alert(JSON.stringify(error));
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

  onSelectedFalciChanged($event){ 
    this.selectedFalciId = $event.target.value;
  }

  onSelectedTypeChanged($event){ 
    this.selectedType = $event.target.value;
  }
}
