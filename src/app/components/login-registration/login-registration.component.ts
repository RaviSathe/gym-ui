import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent {

  constructor(private _ser:LoginRegistrationService , private router:Router){}

  loginPage:boolean = false;
  registrationForm!:FormGroup;
  loginForm!:FormGroup;
  userName:string=''

  // @Output() userName = new EventEmitter<any>

  ngOnInit(){
    this.registrationForm = new FormGroup({
      'firstName' : new FormControl(''),
      'lastName' : new FormControl(''),
      'email' : new FormControl(''),
      'age' : new FormControl(''),
      'mobileNo' : new FormControl(''),
      'password' : new FormControl(''),
      // 'confirmPassword' : new FormControl(''),
    })

    this.loginForm = new FormGroup({
      'email' : new FormControl(''),
      'password' : new FormControl(''),
    })
  }


  onRegistration(){
    this._ser.addUser(this.registrationForm.value).subscribe((res)=>{
      console.log(res);
      this.loginPage = true
    })
  }

  onLogin(){
    console.log("Login Works");
    this._ser.login(this.loginForm.value).subscribe((res)=>{
      // console.log(res);
      this.router.navigate(['home'])
      this._ser.userLoggedIn = true
      let data = res
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), 'data_key').toString();
      localStorage.setItem("user", encryptedData)
    })
  }

  switchTab(){
    this.loginPage = !this.loginPage
  }

  getAllUser(){
    this._ser.findAll().subscribe((res)=>{
      console.log(res);
    })
  }





}
