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

  loginPage:boolean = true;
  registrationForm!:FormGroup;
  loginForm!:FormGroup;
  userName:string=''
  loginDetails:any
  OTP:number=0

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

  adminObj = [
    {email:'ravi', password:'ravi9867'}
  ]

  randomNumberForOTP(digit:number){
    let num = '1234567890'
    let otp = ''
    for (let i = 1; i <= digit; i++) {
      otp += num[Math.floor(Math.random()*10)]
      this.OTP = Number.parseInt(otp)
    }
    console.log('inside method ' + otp);
  }

  
  
  onLogin(){
    this.randomNumberForOTP(4)
    this.loginDetails = this.loginForm.value
    if(this.loginDetails.email === 'admin' && this.loginDetails.password === 'admin123'){
      let num = 0
      if(num === this.OTP){
        alert("Welcome Admin...")
        this.router.navigate(['adminLogin'])
      }else{
        alert("Invalid Credentials...")
        return
      }
    }
    this._ser.login(this.loginForm.value).subscribe((res)=>{
      // console.log(res);
      this._ser.userLoggedIn = true
      let data = res
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), 'data_key').toString();
      this.router.navigate(['home'])
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
