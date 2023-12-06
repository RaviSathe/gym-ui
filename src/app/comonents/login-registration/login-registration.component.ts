import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent {

  constructor(private _ser:LoginRegistrationService){}

  registrationForm!:FormGroup;

  ngOnInit(){
    this.registrationForm = new FormGroup({
      'firstName' : new FormControl(''),
      'lastName' : new FormControl(''),
      'email' : new FormControl(''),
      'mobileNo' : new FormControl(''),
      'age' : new FormControl(''),
      'password' : new FormControl(''),
    })
  }


  onSubmit(){
    // console.log(this.registrationForm.value);
    this._ser.addUser(this.registrationForm.value).subscribe((res)=>{
      console.log(res);
    })
  }


  getAllUser(){
    this._ser.findAll().subscribe((res)=>{
      console.log(res);
    })
  }

}
