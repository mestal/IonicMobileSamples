import { Component, OnInit } from '@angular/core';
import { FortuneTellingService } from 'src/app/services/fortuneTelling.service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { Router } from '@angular/router';
import { GetPhotoModal } from './get-photo-modal/get-photo-modal';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'page-new-fal',
  templateUrl: 'new-fal.html',
  styleUrls: ['./new-fal.scss'],
})
export class NewFalPage implements OnInit {
  falImages: string[] = [];
  activeImageIndex = 0;
  defaultImagePath = "assets/img/add-image.png";

  fal: any;
  fortuneTellers: any;
  selectedFalciId: string;
  selectedType: string;

  constructor(
    private fortuneTellingService: FortuneTellingService,
    private errorHandlerService : ErrorHandlerService,
    private notificationService: NotificationService,
    public router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.falImages.push(this.defaultImagePath);
    this.falImages.push(this.defaultImagePath);
    this.falImages.push(this.defaultImagePath);
    this.falImages.push(this.defaultImagePath);

    this.activeImageIndex = 0;

    this.fortuneTellingService.getActiveFortuneTellers().subscribe(
      data => {
        this.fortuneTellers = data;
      },
      err => {
        this.errorHandlerService.handle(err);
      }
    );
  }

  async openModal(base64Image: string) {
    //var base64Image = this.imageUrlToBase64('profilePic');

    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: GetPhotoModal,
          componentProps: {
            photoBase64: base64Image
          }
    });
     
    modal.onDidDismiss().then((detail) => {
      if (detail != null && detail.data != null) {
        if(detail.data.process == 'Confirm') {
          if(detail.data.image != null) {
            this.falImages[this.activeImageIndex] = detail.data.image;
          }
          else {
            this.falImages[this.activeImageIndex] = this.defaultImagePath;
          }
        }
       }
    });
    
    await modal.present();
  }

  imageSelected(indexOfElement) {
    this.activeImageIndex = indexOfElement;
    if(this.falImages[this.activeImageIndex] != this.defaultImagePath) {
      this.openModal(this.falImages[this.activeImageIndex]);
    }
    else {
      this.openModal(null);
    }
  }

  submit() {
    var anyImage = false;

    const formData: FormData = new FormData();
    if(this.falImages[0] != this.defaultImagePath) {
      formData.append('Pictures', this.makeblob(this.falImages[0]));
      anyImage = true;
    }
    if(this.falImages[1] != this.defaultImagePath) {
      formData.append('Pictures', this.makeblob(this.falImages[1]));
      anyImage = true;
    }
    if(this.falImages[2] != this.defaultImagePath) {
      formData.append('Pictures', this.makeblob(this.falImages[2]));
      anyImage = true;
    }
    if(this.falImages[3] != this.defaultImagePath) {
      formData.append('Pictures', this.makeblob(this.falImages[3]));
      anyImage = true;
    }

    if(!anyImage) {
      this.notificationService.error({Message: "En az bir kahve fotoğrafı ekleyin."});
      return;
    }

    if(!this.selectedFalciId) {
      this.notificationService.error({Message: "Falcı seçin."});
      return;
    }

    if(!this.selectedType) {
      this.notificationService.error({Message: "Konu seçin."});
      return;
    }
    
    formData.append('FortuneTellerId', this.selectedFalciId);
    formData.append('Type', this.selectedType);

    this.fortuneTellingService.submitFortuneTelling(formData).subscribe(
      data => {
        this.notificationService.success({Message: "Falınız gönderilmiştir. En kısa sürede yanıtlanacaktır." });
        this.router.navigateByUrl('/myFals');
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

  onSelectedFalciChanged($event){ 
    this.selectedFalciId = $event.target.value;
  }

  onSelectedTypeChanged($event){ 
    this.selectedType = $event.target.value;
  }
}
