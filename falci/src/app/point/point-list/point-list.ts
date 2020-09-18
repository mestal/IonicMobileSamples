import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/shared-module/notification-service';
import { ErrorHandlerService } from 'src/app/shared-module/error-handler-service';

@Component({
  selector: 'page-point-list',
  templateUrl: 'point-list.html',
  styleUrls: ['./point-list.scss'],
})
export class PointListPage {
  pointList: any[] = [];
  product: any;

  constructor(
    public platform: Platform, 
    private store: InAppPurchase2,
    private userService: UserService,
    private notificationService: NotificationService,
    private errorHandlerService: ErrorHandlerService) {
  }

  ionViewDidEnter() {
    this.userService.getPoints('Android').subscribe((points: any) => {
      this.pointList = points;

      this.platform.ready().then(() => {
        
        this.store.verbosity = this.store.DEBUG;
  
        for(var i = 0; i < this.pointList.length; i ++) {
          this.store.register({
            id: this.pointList[i].productId,
            type: this.store.CONSUMABLE,
          });

          if(this.userService.productsRegistered != true) {
            this.registerHandlersForPurchase(this.pointList[i].productId);
          }
        }

        this.userService.productsRegistered = true;

        // restore purchase
        this.store.refresh();
       });
    });
  }

  registerHandlersForPurchase(productId) {
    let self = this.store;
    this.store.when(productId).updated(function (product) {
      //alert("updated product - " + JSON.stringify(product))
      if (product.loaded && product.valid && product.state === self.APPROVED && product.transaction != null) {
        product.finish();
      }
    });
    this.store.when(productId).registered((product: IAPProduct) => {
      //alert(` registered ${JSON.stringify(product)}`);
    });
    this.store.when(productId).owned((product: IAPProduct) => {
      alert(` owned ${JSON.stringify(product)}`);
      product.finish();
    });
    this.store.when(productId).approved((product: IAPProduct) => {
      //alert(` approved ${JSON.stringify(product)}`);
      product.finish();

      this.userService.buyPoint({
        TransactionJson: JSON.stringify(product.transaction),
        TransactionId: product.transaction.id,
        ProductId: product.id,
        PointType: 'Android',
      }).subscribe((result: any) => {
        this.notificationService.success({ Message: `Toplam puanınız ${result} oldu.`});
      },
      err => {
        this.errorHandlerService.handle(err);
      });
    });
    this.store.when(productId).refunded((product: IAPProduct) => {
      //alert(` refunded ${JSON.stringify(product)}`);
    });
    this.store.when(productId).expired((product: IAPProduct) => {
      //alert(` expired ${JSON.stringify(product)}`);
    });
  }

  checkout(point: any) {
    //this.registerHandlersForPurchase(point.productId);
    try {
      //let product = this.store.get(point.productId);
      //alert('Product Info: ' + JSON.stringify(product));
      this.store.order(point.productId).then((p) => {
        //alert('Purchase Succesful' + JSON.stringify(p));


      }).catch((e) => {
        alert('Error Ordering From Store' + e);
      });
    } catch (err) {
      //alert('Error Ordering ' + JSON.stringify(err));
    }
  }
}
