import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';
import * as AOS from "aos"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit{

  // -------header--------
  loginButton:boolean = false
  userName:any
  // -------header--------

  bmi:any;
  isBMI:boolean = false

  
  constructor(private router:Router, private _loginService: LoginRegistrationService,private ngxService: NgxUiLoaderService){
    
    this._loginService.loginButtons.subscribe((res)=>{
      this.loginButton = res
    })
    
  }

  ngOnInit(){
    AOS.init();
    if(localStorage.getItem("user")){
      this.loginButton = true
      this._loginService.userLoggedIn = true
      this._loginService.decryptData()
      this.userName = localStorage.getItem('un')
    }
    // this.ngxService.start(); 
  }
  
  ngAfterViewInit(){
    // this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
      
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
      this._loginService.loginButtons.next(false)
    };
  }
  
}
