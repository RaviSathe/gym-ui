import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';
import * as CryptoJS from 'crypto-js';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements AfterViewInit{
  firstName: any;
  user: any;
  lastName: any;
  otpBox:boolean = false

  constructor(private _ser: LoginRegistrationService, private router: Router,private ngxService: NgxUiLoaderService,
    private datatype: DatePipe) {
    this.ngxService.start(); 
   }

  loginPage: boolean = true;
  registrationForm!: FormGroup;
  loginForm!: FormGroup;
  userName: string = ''
  loginDetails: any
  OTP: number = 0
  emailIdExist:any;
  d:any
  date = new Date();


  ngOnInit() {
    let latest_date =this.datatype.transform(this.date, 'yyyy-MM-dd');
    
    if(localStorage.getItem('user')){
      this.router.navigate(['home'])
    }
    const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.registrationForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
      'age': new FormControl('', [Validators.required]),
      'mobileNo': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'date' : new FormControl(latest_date),
    })

    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
      'password': new FormControl('', [Validators.required]),
    })
  }

  ngAfterViewInit(){
    this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
  }

   onRegistration() {
     this._ser.emailAlreadyExist(this.registrationForm.value.email).subscribe((res)=>{
       if(res != null){
      alert("Email Id Already Exist"); 
        }else{
          this.ngxService.start();
          this._ser.addUser(this.registrationForm.value).subscribe((res) => {
            console.log(res);
            if(res != null){
              this.loginPage = true
              this.ngxService.stop();
            }else{
              console.log("Something went wrong");
            }
          })
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
    if (this.loginForm.value.email ==='gsathe705@gmail.com' && this.loginForm.value.password === 'admin123') {
      let num = 0
      if (num === this.OTP) {
        alert("Welcome Admin...")
        this.router.navigate(['adminLogin'])
      } else {
        alert("Invalid Credentials...")
        return
      }
    }

    // this._ser.login(this.loginForm.value).subscribe((res:any) => {
    //   if (res != null) {
    //     this.otpBox = true
    //   } else {
    //     alert("Incorrect Details")
    //   }
    // })
    this._ser.login(this.loginForm.value).subscribe((res:any) => {
      if (res != null) {
        this._ser.userLoggedIn = true
        let data = res
        this.firstName = res.firstName
        this.lastName = res.lastName
        this.userName = this.firstName.charAt(0) + this.lastName.charAt(0)
        localStorage.setItem('un',this.userName)
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), 'data_key').toString();
        this.router.navigate(['home'])
        localStorage.setItem("user", encryptedData)
        this._ser.loginButtons.next(true)
      } else {
        alert("Incorrect Details")
      }
    })
  }

  otpSubmit(otp:any){

  }

  switchTab() {
    this.loginPage = !this.loginPage
  }

  getAllUser() {
    this._ser.getAllUsers().subscribe((res) => {
      console.log(res);
    })
  }

  
  checkEmailExistOrNot(emailId:any){
    this._ser.emailAlreadyExist(emailId.value).subscribe((res)=>{
      if(res != null){
        this.emailIdExist = res;
        console.log(res);
      }else{
        alert("User does not exist")
      }
    })
  }


}
