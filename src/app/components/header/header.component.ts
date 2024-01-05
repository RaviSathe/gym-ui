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
  firstName:any
  lastName:any
  // decryptedUser:any

  constructor(private router:Router, private _loginService: LoginRegistrationService){
    this.loginButton = this._loginService.loginButton
    this._loginService.userName.subscribe((res)=>{
      this.userName = res
    })
    this._loginService.loginButtons.subscribe((res)=>{
      this.loginButton = res
    })
  }

  ngOnInit(){
    // this.decryptData()
    if(localStorage.getItem("user")){
      // this.loginButton = true
      this._loginService.loginButtons.next(true)
      this._loginService.userLoggedIn = true
      this._loginService.decryptData()
      this.firstName = this._loginService.decryptedUser.firstName
      this.lastName = this._loginService.decryptedUser.lastName
      this.userName = this.firstName.charAt(0) + this.lastName.charAt(0)
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
      this._loginService.loginButtons.next(false)
      this.router.navigate(['register-login'])
      localStorage.removeItem('user')
    };
  }


}
