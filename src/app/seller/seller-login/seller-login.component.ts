import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/appService/seller.service';
import * as CryptoJS from 'crypto-js';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  emailIdExist: any;
  loginForm!:FormGroup
  registrationForm!:FormGroup
  loginPage:boolean = true;
  allSellers:any;
  myDate = new Date()
  
  constructor(private sellerService_:SellerService, private router: Router, private datatype: DatePipe){
    this.sellerService_.getAllSeller().subscribe((res)=>{
      this.allSellers = res
    })
  }
  
  // emailExist:boolean = false

  ngOnInit(){
    let latest_date =this.datatype.transform(this.myDate, 'yyyy-MM-dd');

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
      'date' : new FormControl(latest_date),
    })

    // this.getAllSeller()
  }

  onLogin(){
    console.log("loginWorks");
    console.log(this.loginForm.value);
    this.sellerService_.loginSeller(this.loginForm.value).subscribe((res:any)=>{
      console.log(res);
      let id = res.sellerID;
      localStorage.setItem('id',id)
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(res),'data_key').toString();
      localStorage.setItem('seller',encryptedData)
      this.sellerService_.sellerLogin.next(true)
      this.router.navigate(['./dashboard'])
    })
  }

  onRegistration(){
    this.sellerService_.emailAlreadyExist(this.registrationForm.value.email).subscribe((res)=>{
      if(res != null){
        this.emailIdExist = res;
        alert("Email id exist")
        console.log(res);
      }else{
        this.sellerService_.registerSeller(this.registrationForm.value).subscribe((res)=>{
          console.log(res);
          alert("Seller Registration Successfull...")
          this.loginPage = true
        })
      }
    })
    
  }

  switchTab(){
    this.loginPage = !this.loginPage
  }

  getAllSeller(){
    this.sellerService_.getAllSeller().subscribe((res:any)=>{
      res.filter((find:any)=>{
        if(find.email === this.loginForm.value.email){
          this.sellerService_.activeSeller.push(find)
        }
      })
    })
  }

  checkEmailExistOrNot(emailId:any){
    this.sellerService_.emailAlreadyExist(emailId.value).subscribe((res)=>{
      if(res != null){
        this.emailIdExist = res;
        console.log(res);
      }else{
        alert("User does not exist")
      }
    })
  }

 

}
