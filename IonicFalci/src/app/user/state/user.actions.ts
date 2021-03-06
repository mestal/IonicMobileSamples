/* NgRx */
import { Action } from '@ngrx/store';
import { LoginInformation } from "../LoginInformation";

export enum UserActionTypes {
  Login = '[User] Login',
  LoginSuccess = '[User] Login Success',
  LoginFail = '[User] Login Fail',
  Logout = '[User] Logout'
}

export class Login implements Action {
  readonly type = UserActionTypes.Login;

  constructor(public loginInformation: LoginInformation) { }
}

export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LoginSuccess;

  constructor(public payload: any) { }
}

export class LoginFail implements Action {
  readonly type = UserActionTypes.LoginFail;

  constructor(public payload: any) { }
}

export class Logout implements Action {
  readonly type = UserActionTypes.Logout;

  constructor() { }
}

export type UserActions = Login 
    | LoginSuccess
    | LoginFail
    | Logout;