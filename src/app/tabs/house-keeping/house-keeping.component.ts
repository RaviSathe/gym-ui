import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-house-keeping',
  templateUrl: './house-keeping.component.html',
  styleUrls: ['./house-keeping.component.css']
})
export class HouseKeepingComponent {

  houseKeeping:any
  searchResult:any

  houseKeepingArray:any = []

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res)=>{
      this.houseKeeping = res
      // console.log('res',res);
      this.searchResult = this.houseKeeping.filter((item: any)=>{
        if(item.category === 'gym'){
          this.searchResult = item
          console.log(this.searchResult);
          this.houseKeepingArray.push(this.searchResult)
        }
      })
    })
  }



}
