import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';

@Component({
    templateUrl: 'get-photo-modal.html',
    styleUrls: ['./get-photo-modal.scss'],
    selector: 'get-photo-modal-page',
})
export class GetPhotoModal {
    photoBase64: string;

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
        private camera: Camera,
        private modalController: ModalController
    ) {}

    rotateBase64Image90deg(base64Image, isClockwise) {
        if(base64Image == null) {
            return;
        }
        // create an off-screen canvas
        var offScreenCanvas = document.createElement('canvas');
        var offScreenCanvasCtx = offScreenCanvas.getContext('2d');

        // cteate Image
        var img = new Image();
        img.src = base64Image;

        // set its dimension to rotated size
        offScreenCanvas.height = img.width;
        offScreenCanvas.width = img.height;

        // rotate and draw source image into the off-screen canvas:
        if (isClockwise) { 
            offScreenCanvasCtx.rotate(90 * Math.PI / 180);
            offScreenCanvasCtx.translate(0, -offScreenCanvas.width);
        } else {
            offScreenCanvasCtx.rotate(-90 * Math.PI / 180);
            offScreenCanvasCtx.translate(-offScreenCanvas.height, 0);
        }
        offScreenCanvasCtx.drawImage(img, 0, 0);

        // encode image to data-uri with base64
        return offScreenCanvas.toDataURL("image/jpeg", 100);
    }

    confirmPhoto() {
        //formData.append('Photo', this.makeblob(this.profilePictureBase64));
        this.modalController.dismiss({ image: this.photoBase64, process: 'Confirm'});
    }

    cancel() {
        //formData.append('Photo', this.makeblob(this.profilePictureBase64));
        this.modalController.dismiss({ image: null, process: 'Cancel'});
    }

    loadImage() {
        this.camera.getPicture(this.optionsGallery).then((imageData) => {
            this.photoBase64 = 'data:image/jpeg;base64,' + imageData;
         }, (err) => {
          console.log(err)
         })
    }

    captureImage() {
        this.camera.getPicture(this.options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          this.photoBase64 = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
          console.log(err);
        });
    }

    removeImage() {
        this.photoBase64 = null;
    }
}