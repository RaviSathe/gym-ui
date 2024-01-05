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
  // userName:any
  decryptedUser:any

  userName = new Subject<any>()
  loginButtons = new BehaviorSubject<any>(false)

  decryptData(){
    if(localStorage.getItem('user')){
      const eText = localStorage.getItem('user') || '';
      const decryptedWord = CryptoJS.AES.decrypt(eText , 'data_key')
      this.decryptedUser = JSON.parse(decryptedWord.toString(CryptoJS.enc.Utf8))
      console.log(this.decryptedUser);
    }
  }

  public addUser(user:any){
    return this.http.post('http://localhost:9090/user/register',user)
  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:9090/user/getAllUser');
  }

  public login(data:any){
    return this.http.post('http://localhost:9090/user/login',data)
  }

  public emailAlreadyExist(emailId:any){
    return this.http.get(`http://localhost:9090/user/emailExist/${emailId}`)
  }

}
