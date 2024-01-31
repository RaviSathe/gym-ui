import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-house-keeping',
  templateUrl: './house-keeping.component.html',
  styleUrls: ['./house-keeping.component.css']
})
export class HouseKeepingComponent {

  houseKeeping:any = []
  filteredData:any=[]
  productInfo:boolean = false;
  
  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'house-keeping' && item.useOfProduct === "list"){
          this.houseKeeping.push(item)
        }
      })
    })
  }
  

  selectedItem(i:any){
    this.filteredData =[]
    this.houseKeeping.filter((res:any)=>{
      if(i === res.id)
      {
        this.filteredData.push(res)
        console.log(this.filteredData);
        this.productInfo = true
      }
    })
  }

  backToAllProducts(){
    this.filteredData=[]
    this.productInfo = false
  }



}
