import { Component } from '@angular/core';
import * as AOS from "aos"

@Component({
  selector: 'app-gofit',
  templateUrl: './gofit.component.html',
  styleUrls: ['./gofit.component.css']
})
export class GofitComponent {

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
