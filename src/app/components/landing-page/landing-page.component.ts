import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from "aos"
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent{

  ngOnInit(){
    AOS.init()
  }

  bmi:any;
  isBMI:boolean = false

  calculateBMI(age:any, gender:any, height_feet:any, height_inch:any, weight:any){
    console.log(age.value,gender.value,height_feet.value,height_inch.value,weight.value);

    let Total_height_in_inches =(height_feet.value * 12) + 6;
    this.bmi = weight.value / (Total_height_in_inches * Total_height_in_inches) * 703
    this.isBMI = true
  }


}
