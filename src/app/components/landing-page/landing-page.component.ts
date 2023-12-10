import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{
  
  loginButton:boolean = false
  constructor(private router:Router , private _loginService: LoginRegistrationService){
    this.loginButton = this._loginService.loginButton
  }

  ngOnInit(){
    if(this._loginService.userLoggedIn === true || localStorage.getItem("user")){
      this.loginButton = true
      this._loginService.userLoggedIn = true
    }
  }

  knowMore(requirement:any){
    if(this._loginService.userLoggedIn === true){
      if(requirement === 'gym'){
        console.log("gym");
        this.router.navigate(['gyms'])
      }else if(requirement === 'protine'){
        console.log("protine");
        this.router.navigate(['protine'])
      }else if(requirement === 'diet-plan'){
        console.log("diet-plan");
        this.router.navigate(['diet-plan'])
      }else if(requirement === 'gym-equipment'){
        console.log("gym-equipment");
        this.router.navigate(['gym-equipment'])
      }else if(requirement === 'gym-requiremnet'){
        console.log("gym-requiremnet");
        this.router.navigate(['gym-requiremnet'])
      }else if(requirement === 'house-keeping'){
        console.log("house-keeping");
        this.router.navigate(['house-keeping'])
      }else if(requirement === 'machine-repair'){
        console.log("machine-repair");
        this.router.navigate(['machine-repair'])
      }else if(requirement === 'personal-trainer'){
        console.log("personal-trainer");
        this.router.navigate(['personal-trainer'])
      }else if(requirement === 'protine-cafe'){
        console.log("protine-cafe");
        this.router.navigate(['protine-cafe'])
      }else if(requirement === 'sports-ware'){
        console.log("sports-ware");
        this.router.navigate(['sports-ware'])
      }
  }else{
    this.router.navigate(['register-login'])
  }
  }

  login(){
    this.router.navigate(['register-login'])
  }

  logout(){
    localStorage.clear()
    this._loginService.userLoggedIn = false
    this.loginButton = false
  }

}
