import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from "aos"
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{

  ngOnInit(){
    AOS.init();
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

  // -------header--------
  loginButton:boolean = false
  userName:any
  firstName:any
  lastName:any
  // -------header--------

  bmi:any;
  isBMI:boolean = false

  constructor(private router:Router, private _loginService: LoginRegistrationService){
    this.loginButton = this._loginService.loginButton
    this._loginService.userName.subscribe((res)=>{
      this.userName = res
    })
    this._loginService.loginButtons.subscribe((res)=>{
      this.loginButton = res
    })
  }

  calculateBMI(age:any, gender:any, height_feet:any, height_inch:any, weight:any){
    console.log(age.value,gender.value,height_feet.value,height_inch.value,weight.value);

    let Total_height_in_inches =(height_feet.value * 12) + 6;
    this.bmi = weight.value / (Total_height_in_inches * Total_height_in_inches) * 703
    this.isBMI = true
  }

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
