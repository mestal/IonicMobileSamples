import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { environment } from 'src/environments/environment';

@Component({
    templateUrl: 'update-profile-picture-modal.html',
    styleUrls: ['./update-profile-picture-modal.scss'],
    selector: 'update-profile-picture-modal-page',
})
export class UpdateProfilePictureModal {
    profilePictureBase64: string;
    pictureChanged = false;
    isAndroid: boolean;

    private optionsGallery: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }


    constructor(
        private camera: Camera,
        private service: UserService,
        private errorHandlerService : ErrorHandlerService,
        private notificationService: NotificationService,
        private modalController: ModalController,
        private crop: Crop,
        private file: File,
        private platform: Platform,
    ) {
        this.isAndroid = environment.platform == 'android';
    }

    loadImage() {
        if(!this.isAndroid) {
            this.optionsGallery.destinationType = this.camera.DestinationType.DATA_URL;
        }

        this.camera.getPicture(this.optionsGallery).then((imageData) => {
            if(this.isAndroid) {
                this.cropImage(imageData);
            }
            else {
                this.profilePictureBase64 = 'data:image/jpg;base64,' + imageData;
                this.pictureChanged = true;
            }
      });
    }

    rotateBase64Image90deg(base64Image, isClockwise) {
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

        this.pictureChanged = true;
        // encode image to data-uri with base64
        return offScreenCanvas.toDataURL("image/jpg", 100);
    }

    submitChangeProfile() {
        const formData: FormData = new FormData();
        formData.append('Photo', this.makeblob(this.profilePictureBase64));
        this.service.updateProfilePhoto(formData).subscribe(
            (result: any) => {
                this.notificationService.success({Message: "Profil resmi değiştirildi." });
                this.modalController.dismiss(result.picturePath);
            },
            err => {
                this.errorHandlerService.handle(err);
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

    cancel() {
        this.modalController.dismiss();
    }

    cropImage(fileUrl) {
        this.crop.crop(fileUrl, { quality: 50 })
        .then(
            newPath => {
                this.showCroppedImage(newPath.split('?')[0])
            },
            error => {
                alert('Error cropping image: ' + JSON.stringify(error));
            }
        );
    }

    showCroppedImage(ImagePath) {
        // this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];

        this.file.readAsDataURL(filePath, imageName).then(base64 => {
            this.profilePictureBase64 = base64;
            this.pictureChanged = true;
            // this.isLoading = false;
        }, error => {
            alert('Error in showing image' + error);
            // this.isLoading = false;
        });
    }
}