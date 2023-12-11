import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loginButton:boolean = false
  decryptedUser:any
  userName:any

  constructor(private router:Router , private _loginService: LoginRegistrationService){
    this.loginButton = this._loginService.loginButton
  }

  ngOnInit(){
    this.decryptData()
    if(this._loginService.userLoggedIn === true || localStorage.getItem("user")){
      this.loginButton = true
      this._loginService.userLoggedIn = true
      this.userName = this.decryptedUser.firstName
    }
  }

  decryptData(){
    if(localStorage.getItem('user')){
      const eText = localStorage.getItem('user') || '';
      const decryptedWord = CryptoJS.AES.decrypt(eText , 'data_key')
      this.decryptedUser = JSON.parse(decryptedWord.toString(CryptoJS.enc.Utf8))
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
    if(confirm("You Want to Logout ?")){
      localStorage.clear()
      this._loginService.userLoggedIn = false
      this.loginButton = false
    };
      
    
  }

  enquiryForm(){

  }


}
