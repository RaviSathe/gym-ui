import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-gym-requirement',
  templateUrl: './gym-requirement.component.html',
  styleUrls: ['./gym-requirement.component.css']
})
export class GymRequirementComponent {

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'gym-requirement'){
          this.gymRequirements.push(item)
        }
      })
    })
  }
  
  gymRequirements:any = [
    
  ]

}
