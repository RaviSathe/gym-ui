import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';
import * as CryptoJS from 'crypto-js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent {

  constructor(private _ser: LoginRegistrationService, private router: Router, private toastr: ToastrService) { }

  loginPage: boolean = true;
  registrationForm!: FormGroup;
  loginForm!: FormGroup;
  userName: string = ''
  loginDetails: any
  OTP: number = 0

  // @Output() userName = new EventEmitter<any>

  ngOnInit() {
    const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.registrationForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
      'age': new FormControl('', [Validators.required]),
      'mobileNo': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      // 'confirmPassword' : new FormControl(''),
    })

    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
      'password': new FormControl('', [Validators.required]),
    })
  }


  onRegistration() {
    this._ser.addUser(this.registrationForm.value).subscribe((res) => {
      console.log(res);
      if(res != null){

        this.loginPage = true
      }
    })
  }

  adminObj = [
    { email: 'ravi', password: 'ravi9867' }
  ]

  randomNumberForOTP(digit: number) {
    let num = '1234567890'
    let otp = ''
    for (let i = 1; i <= digit; i++) {
      otp += num[Math.floor(Math.random() * 10)]
      this.OTP = Number.parseInt(otp)
    }
    console.log('inside method ' + otp);
  }


  onLogin() {
    this.randomNumberForOTP(4)
    if (this.loginForm.value.email === 'admin@gmail.com' && this.loginForm.value.password === 'admin123') {
      let num = 0
      if (num === this.OTP) {
        alert("Welcome Admin...")
        this.router.navigate(['adminLogin'])
      } else {
        alert("Invalid Credentials...")
        return
      }
    }

    this._ser.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if (res != null) {
        this._ser.userLoggedIn = true
        let data = res
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), 'data_key').toString();
        this.router.navigate(['home'])
        localStorage.setItem("user", encryptedData)
      } else {
        alert("Incorrect Details")
      }
    })
  }

  switchTab() {
    this.loginPage = !this.loginPage
  }

  getAllUser() {
    this._ser.findAll().subscribe((res) => {
      console.log(res);
    })
  }


}
