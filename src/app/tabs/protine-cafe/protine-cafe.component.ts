import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-protine-cafe',
  templateUrl: './protine-cafe.component.html',
  styleUrls: ['./protine-cafe.component.css']
})
export class ProtineCafeComponent {
  
  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'protine-cafe'){
          this.protineCafes.push(item)
        }
      })
    })
  }
  
  protineCafes:any = [
    
  ]

}
