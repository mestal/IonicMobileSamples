import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { } //private fb: FormBuilder, 
  readonly BaseURI = environment.baseUrl;

//   formModel = this.fb.group({
//     UserName: ['', Validators.required],
//     Email: ['', Validators.email],
//     FullName: [''],
//     Passwords: this.fb.group({
//       Password: ['', [Validators.required, Validators.minLength(4)]],
//       ConfirmPassword: ['', Validators.required]
//     }, { validator: this.comparePasswords })

//   });

//   comparePasswords(fb: FormGroup) {
//     let confirmPswrdCtrl = fb.get('ConfirmPassword');
//     //passwordMismatch
//     //confirmPswrdCtrl.errors={passwordMismatch:true}
//     if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
//       if (fb.get('Password').value != confirmPswrdCtrl.value)
//         confirmPswrdCtrl.setErrors({ passwordMismatch: true });
//       else
//         confirmPswrdCtrl.setErrors(null);
//     }
//   }

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
}
