import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';

@Component({
  selector: 'page-point-list',
  templateUrl: 'point-list.html',
  styleUrls: ['./point-list.scss'],
})
export class PointListPage {
  pointList: any[] = [];

  constructor(public platform: Platform, private store: InAppPurchase2) {
    platform.ready().then(() => {
      this.store.register({
        id: "my_product_id",
        type: this.store.NON_RENEWING_SUBSCRIPTION,
      });
      this.store.when("my_product_id")
        .approved(p => p.verify())
        .verified(p => p.finish());
      this.store.refresh();
     });
  }

  ionViewDidEnter() {
    this.pointList = [{title: 'Bir'}, {title: 'İki'}];
  }
}
