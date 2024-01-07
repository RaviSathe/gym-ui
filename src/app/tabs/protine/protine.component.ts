import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-protine',
  templateUrl: './protine.component.html',
  styleUrls: ['./protine.component.css']
})
export class ProtineComponent {

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'protine'){
          this.protines.push(item)
        }
      })
    })
  }
  
  protines:any = [
    
  ]

}
