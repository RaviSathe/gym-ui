import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-protine',
  templateUrl: './protine.component.html',
  styleUrls: ['./protine.component.css']
})
export class ProtineComponent {
  protines:any = []
  filteredData:any=[]
  productInfo:boolean = false;

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'protine' && item.useOfProduct === "list"){
          this.protines.push(item)
        }
      })
    })
  }
  

  selectedItem(i:any){
    this.filteredData =[]
    this.protines.filter((res:any)=>{
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
