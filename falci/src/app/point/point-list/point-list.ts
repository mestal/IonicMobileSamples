import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';

@Component({
  selector: 'page-point-list',
  templateUrl: 'point-list.html',
  styleUrls: ['./point-list.scss'],
})
export class PointListPage {
  pointList: any[] = [];
  product: any;

  constructor(public platform: Platform, private store: InAppPurchase2) {

  }

  ionViewDidEnter() {
    this.pointList = [{title: 'Bir'}];
    this.platform.ready().then(() => {
      //var products = this.store.products;
      
      this.store.verbosity = this.store.DEBUG;
      this.store.register({
        id: "point_20",
        type: this.store.CONSUMABLE,
      });

      var product1 = this.store.get('point_20');
      this.product = JSON.stringify(product1);
      this.registerHandlersForPurchase('point_20');
      // restore purchase
      this.store.refresh();
      // var products = this.store.products;
      // this.store.when("point_20")
      //   .approved(p => p.verify())
      //   .verified(p => p.finish());
      // this.store.refresh();
     });
    
  }

  registerHandlersForPurchase(productId) {
    let self = this.store;
    this.store.when(productId).updated(function (product) {
      alert("updated product - " + JSON.stringify(product))
      if (product.loaded && product.valid && product.state === self.APPROVED && product.transaction != null) {
        product.finish();
      }
    });
    this.store.when(productId).registered((product: IAPProduct) => {
      alert(` registered ${JSON.stringify(product)}`);
    });
    this.store.when(productId).owned((product: IAPProduct) => {
      alert(` owned ${JSON.stringify(product)}`);
      product.finish();
    });
    this.store.when(productId).approved((product: IAPProduct) => {
      alert(` approved ${JSON.stringify(product)}`);
      product.finish();
    });
    this.store.when(productId).refunded((product: IAPProduct) => {
      alert(` refunded ${JSON.stringify(product)}`);
    });
    this.store.when(productId).expired((product: IAPProduct) => {
      alert(` expired ${JSON.stringify(product)}`);
    });
  }

  checkout() {
    this.registerHandlersForPurchase('point_20');
    try {
      let product = this.store.get('point_20');
      alert('Product Info: ' + JSON.stringify(product));
      this.store.order('point_20').then((p) => {
        alert('Purchase Succesful' + JSON.stringify(p));
      }).catch((e) => {
        alert('Error Ordering From Store' + e);
      });
    } catch (err) {
      alert('Error Ordering ' + JSON.stringify(err));
    }
  }
}
