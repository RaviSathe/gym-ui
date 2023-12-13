import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  constructor(private http:HttpClient) {}
  
  private Url: string = 'http://localhost:9090';

  loginButton:boolean = false
  userLoggedIn:boolean = false;
  userName:any
  decryptedUser:any

  decryptData(){
    if(localStorage.getItem('user')){
      const eText = localStorage.getItem('user') || '';
      const decryptedWord = CryptoJS.AES.decrypt(eText , 'data_key')
      this.decryptedUser = JSON.parse(decryptedWord.toString(CryptoJS.enc.Utf8))
      console.log(this.decryptedUser);
    }
  }

  public addUser(user:any){
    return this.http.post(this.Url,user)
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.Url);
  }

  public login(data:any){
    return this.http.post('http://localhost:9090/login',data)
  }

}
