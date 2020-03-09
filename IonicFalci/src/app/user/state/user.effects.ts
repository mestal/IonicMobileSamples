import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { UserService } from '../user.service';
import { User } from '../user';
import { LoginInformation } from "../LoginInformation";

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {

  constructor(private userService: UserService,
              private actions$: Actions) { }

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.Login),
    map((action: UserActions.Login) => action.loginInformation),
    mergeMap((loginInformation: LoginInformation) =>
      this.userService.login(loginInformation).pipe(
        map(userInfo => (new UserActions.LoginSuccess(userInfo))),
        catchError(err => of(new UserActions.LoginFail(err)))
      )
    )
  );

//   @Effect()
//   loadProducts$: Observable<Action> = this.actions$.pipe(
//     ofType(productActions.ProductActionTypes.Load),
//     mergeMap(action =>
//       this.productService.getProducts().pipe(
//         map(products => (new productActions.LoadSuccess(products))),
//         catchError(err => of(new productActions.LoadFail(err)))
//       )
//     )
//   );

//   @Effect()
//   updateProduct$: Observable<Action> = this.actions$.pipe(
//     ofType(productActions.ProductActionTypes.UpdateProduct),
//     map((action: productActions.UpdateProduct) => action.payload),
//     mergeMap((product: Product) =>
//       this.productService.updateProduct(product).pipe(
//         map(updatedProduct => (new productActions.UpdateProductSuccess(updatedProduct))),
//         catchError(err => of(new productActions.UpdateProductFail(err)))
//       )
//     )
//   );

//   @Effect()
//   createProduct$: Observable<Action> = this.actions$.pipe(
//     ofType(productActions.ProductActionTypes.CreateProduct),
//     map((action: productActions.CreateProduct) => action.payload),
//     mergeMap((product: Product) =>
//       this.productService.createProduct(product).pipe(
//         map(newProduct => (new productActions.CreateProductSuccess(newProduct))),
//         catchError(err => of(new productActions.CreateProductFail(err)))
//       )
//     )
//   );

//   @Effect()
//   deleteProduct$: Observable<Action> = this.actions$.pipe(
//     ofType(productActions.ProductActionTypes.DeleteProduct),
//     map((action: productActions.DeleteProduct) => action.payload),
//     mergeMap((productId: number) =>
//       this.productService.deleteProduct(productId).pipe(
//         map(() => (new productActions.DeleteProductSuccess(productId))),
//         catchError(err => of(new productActions.DeleteProductFail(err)))
//       )
//     )
//   );
}