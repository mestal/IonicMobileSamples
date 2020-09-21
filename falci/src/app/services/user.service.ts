import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //singleton property
  productsRegistered: boolean;
  user: any;

  constructor(private http: HttpClient) { }
  readonly BaseURI = environment.baseUrl;

  register(formData) {
    return this.http.post(this.BaseURI + 'User/RegisterNewUser', formData);
  }

  confirmNewUser(formData) {
    return this.http.post(this.BaseURI + 'User/ConfirmNewUser', formData);
  }

  login(formData) {
    return this.http.post(this.BaseURI + 'User/Login', formData);
  }

  getConsumerUserInfo(userName) {
    return this.http.get(this.BaseURI + 'User/GetConsumerUserInfo?userName=' + userName);
  }

  getConsumerUserInfoById(userId) {
    return this.http.get(this.BaseURI + 'User/GetConsumerUserInfo?consumerUserId=' + userId);
  }

  forgatPassword(formData) {
    return this.http.post(this.BaseURI + 'User/ForgatPassword', formData);
  }

  resetPassword(formData) {
    return this.http.post(this.BaseURI + 'User/ResetPassword', formData);
  }

  changePassword(formData) {
    return this.http.post(this.BaseURI + 'User/ChangePassword', formData);
  }

  updateProfilePhoto(formData) {
    return this.http.post(this.BaseURI + 'User/UpdateProfilePhoto', formData);
  }

  updateUserInfo(formData) {
    return this.http.post(this.BaseURI + 'User/UpdateUserInfo', formData);
  }

  getPoints(pointType: string) {
    return this.http.get(this.BaseURI + 'User/GetPoints?pointType=' + pointType);
  }

  buyPoint(data) {
    return this.http.post(this.BaseURI + 'User/BuyPoint', data);
  }
}
