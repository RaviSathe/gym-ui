import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/appService/seller.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements AfterViewInit{
  
  constructor(private sellerService_:SellerService, private router: Router){
    this.sellerService_.getAllSeller().subscribe((res)=>{
      this.allSellers = res
    })
  }
  ngAfterViewInit(): void {
    // console.log(this.allSellers);
  }
  
  emailIdExist: any;
  loginForm!:FormGroup
  registrationForm!:FormGroup
  loginPage:boolean = true;
  allSellers:any;
  // emailExist:boolean = false

  ngOnInit(){
    if(localStorage.getItem('seller')){
      this.router.navigate(['dashboard'])
    }

    const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.pattern(emailPattern)]),
      password : new FormControl('',Validators.required)
    })

    this.registrationForm = new FormGroup({
      'firstName' : new FormControl('', [Validators.required]),
      'lastName' : new FormControl('', [Validators.required]),
      'email' : new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
      'age' : new FormControl('', [Validators.required]),
      'mobileNo' : new FormControl('', [Validators.required]),
      'password' : new FormControl('', [Validators.required]),
      // 'confirmPassword' : new FormControl(''),
    })

    this.getAllSeller()
  }

  onLogin(){
    console.log("loginWorks");
    console.log(this.loginForm.value);
    this.sellerService_.loginSeller(this.loginForm.value).subscribe((res)=>{
      console.log(res);
      let data = res;
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data),'data_key').toString();
      localStorage.setItem('seller',encryptedData)
      this.router.navigate(['./dashboard'])
    })
  }

  onRegistration(){
    this.checkEmailExistOrNot(this.registrationForm.value.email);
    if(this.emailIdExist === null){
      this.sellerService_.registerSeller(this.registrationForm.value).subscribe((res)=>{
        console.log(res);
        alert("Seller Registration Successfull...")
        this.loginPage = true
      })
    }else{
      alert("Email id Already Exist")
    }
  }

  switchTab(){
    this.loginPage = !this.loginPage
  }

  getAllSeller(){
    this.sellerService_.getAllSeller().subscribe((res)=>{
      this.allSellers = res
      this.allSellers.forEach((el:any)=>{
          console.log(el);  
      })
    })
  }

  checkEmailExistOrNot(emailId:any){
    this.sellerService_.emailAlreadyExist(emailId).subscribe((res)=>{
      if(res != null){
        this.emailIdExist = res;
        console.log(res);
      }else{
        alert("User does not exist")
      }
    })
  }

  // signUpPage() {
  //   const signUpButton: HTMLElement | null = document.getElementById('signUp');
  //   const signInButton: HTMLElement | null = document.getElementById('signIn');
  //   const container: HTMLElement | null = document.getElementById('container');

  //   if (signUpButton && signInButton && container) {
  //     signUpButton.addEventListener('click', () => {
  //       container.classList.add("right-panel-active");
  //     });

  //     signInButton.addEventListener('click', () => {
  //       container.classList.remove("right-panel-active");
  //     });
  //   }
  // }


}
