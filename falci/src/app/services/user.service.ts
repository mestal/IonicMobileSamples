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

  getEmployee(formData) {
    return this.http.post(this.BaseURI + 'GetEmployee', formData);
  }
  
}
