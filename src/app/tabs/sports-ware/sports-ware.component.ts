import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-sports-ware',
  templateUrl: './sports-ware.component.html',
  styleUrls: ['./sports-ware.component.css']
})
export class SportsWareComponent {

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'sportware'){
          this.sportsWare.push(item)
        }
      })
    })
  }
  
  sportsWare:any = [
    
  ]

}
