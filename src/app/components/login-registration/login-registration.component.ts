import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent {

  constructor(private _ser:LoginRegistrationService , private router:Router){}

  loginPage:boolean = false;
  registrationForm!:FormGroup;
  loginForm!:FormGroup;

  ngOnInit(){
    this.registrationForm = new FormGroup({
      'firstName' : new FormControl(''),
      'lastName' : new FormControl(''),
      'email' : new FormControl(''),
      'mobileNo' : new FormControl(''),
      'password' : new FormControl(''),
      'confirmPassword' : new FormControl(''),
    })

    this.loginForm = new FormGroup({
      'email' : new FormControl(''),
      'password' : new FormControl(''),
    })
  }


  onRegistration(){
    this._ser.addUser(this.registrationForm.value).subscribe((res)=>{
      console.log(res);
    })
  }

  onLogin(){
    console.log("Login Works");
    this.router.navigate([''])
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
