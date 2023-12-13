import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  loginButton:boolean = false
  userName:any
  // decryptedUser:any

  constructor(private router:Router, private _loginService: LoginRegistrationService){
    this.loginButton = this._loginService.loginButton
  }

  ngOnInit(){
    // this.decryptData()
    if(this._loginService.userLoggedIn === true || localStorage.getItem("user")){
      this.loginButton = true
      this._loginService.userLoggedIn = true
      this._loginService.decryptData()
      this.userName = this._loginService.decryptedUser.firstName
      //  = this.decryptedUser.firstName
    }
  }

  // decryptData(){
  //   if(localStorage.getItem('user')){
  //     const eText = localStorage.getItem('user') || '';
  //     const decryptedWord = CryptoJS.AES.decrypt(eText , 'data_key')
  //     this.decryptedUser = JSON.parse(decryptedWord.toString(CryptoJS.enc.Utf8))
  //     console.log(this.decryptedUser);
  //   }
  // }


  login(){
    this.router.navigate(['register-login'])
  }

  logout(){
    if(confirm("You Want to Logout ?")){
      localStorage.clear()
      this._loginService.userLoggedIn = false
      this.loginButton = false
      this.router.navigate(['register-login'])
    };
  }


}
