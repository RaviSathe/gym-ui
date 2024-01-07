import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-gym-equipment',
  templateUrl: './gym-equipment.component.html',
  styleUrls: ['./gym-equipment.component.css']
})
export class GymEquipmentComponent {

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'gym-equipments'){
          this.gymEquipment.push(item)
        }
      })
    })
  }
  
  gymEquipment:any = [
    
  ]

}
