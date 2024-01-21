import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  constructor(private http:HttpClient) {}
  
  private Url: string = 'http://localhost:9090';

  loginButton:boolean = false
  userLoggedIn:boolean = false;
  decryptedUser:any
  // userName = new BehaviorSubject('')
  loginButtons = new BehaviorSubject(false)

  decryptData(){
    if(localStorage.getItem('user')){
      const eText = localStorage.getItem('user') || '';
      const decryptedWord = CryptoJS.AES.decrypt(eText , 'data_key')
      this.decryptedUser = JSON.parse(decryptedWord.toString(CryptoJS.enc.Utf8))
    }
  }

  public addUser(user:any){
    return this.http.post('http://localhost:9090/user/register',user)
  }

  public getAllUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:9090/user/getAllUser');
  }

  public login(data:any){
    return this.http.post('http://localhost:9090/user/login',data)
  }

  public emailAlreadyExist(emailId:any){
    return this.http.get(`http://localhost:9090/user/emailExist/${emailId}`)
  }

  public deleteUserById(id:any){
    return this.http.delete(`http://localhost:9090/user/deleteUserById/${id}`)
  }

  public restrict_special_char(event:any) {
    let allowed = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9-_!@#$%^&*. ]/.test(allowed)) {       // only special characters defined are allowed
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  public space(event: any) {
    if (event.target.selectionStart === 0 && event.code === 'Space') {
      event.preventDefault();
    }
  }

  public generateOTP(){
    return this.http.get('http://localhost:9090/user/otp')
  }

}
