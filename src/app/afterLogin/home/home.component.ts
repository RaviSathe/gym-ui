import { Component, ViewChild , AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{

  loginButton:boolean = false
  decryptedUser:any

  constructor(private router:Router , private _loginService: LoginRegistrationService){}


  ngAfterViewInit(){
  }

  ngOnInit(){
    this.decryptData()
    if(this._loginService.userLoggedIn === true || localStorage.getItem("user")){
      this.loginButton = true
      this._loginService.userLoggedIn = true
    }
  }

  decryptData(){
    if(localStorage.getItem('user')){
      const eText = localStorage.getItem('user') || '';
      const decryptedWord = CryptoJS.AES.decrypt(eText , 'data_key')
      this.decryptedUser = JSON.parse(decryptedWord.toString(CryptoJS.enc.Utf8))
    }
  }


  // ---------------functions---------------

  getMoreGyms(){
    if(localStorage.getItem('user')){
      console.log("gym");
      this.router.navigate(['gyms'])
    }else{
        this.router.navigate(['register-login'])
      }
  }

  getMoreProtines(){
    if(localStorage.getItem('user')){
    console.log("protine");
    this.router.navigate(['protine'])
    }else{
      this.router.navigate(['register-login'])
    }
  }

  getMoreGymEquipment(){
    if(localStorage.getItem('user')){
    console.log("gym-equipment");
    this.router.navigate(['gym-equipment'])
    }else{
      this.router.navigate(['register-login'])
    }
  }

  getHouseKeeping(){
    if(localStorage.getItem('user')){
    console.log("house-keeping");
    this.router.navigate(['house-keeping'])
    }else{
      this.router.navigate(['register-login'])
    }
  }

  getMorePersonlTrainer(){
    if(localStorage.getItem('user')){
    console.log("personal-trainer");
    this.router.navigate(['personal-trainer'])
    }else{
      this.router.navigate(['register-login'])
    }
  }

  getMoreDietPlan(){
    if(localStorage.getItem('user')){
    console.log("diet-plan");
    this.router.navigate(['diet-plan'])
    }else{
      this.router.navigate(['register-login'])
    }
  }

  gymRequirements(){
    if(localStorage.getItem('user')){
    console.log("gym-requiremnet");
    this.router.navigate(['gym-requiremnet'])
    }else{
      this.router.navigate(['register-login'])
    }
  }

  machineRepair(){
    if(localStorage.getItem('user')){
    console.log("machine-repair");
    this.router.navigate(['machine-repair'])
    }else{
      this.router.navigate(['register-login'])
    }
  }

  protineCafe(){
    if(localStorage.getItem('user')){
    console.log("protine-cafe");
    this.router.navigate(['protine-cafe'])
    }else{
      this.router.navigate(['register-login'])
    }
  }

  sportsWare(){
    if(localStorage.getItem('user')){
    console.log("sports-ware");
    this.router.navigate(['sports-ware'])
    }else{
      this.router.navigate(['register-login'])
    }
  }

  commingSoone(){
    alert("Somethings Comming Soon......")
  }

  // ---------------functions end--------------


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
