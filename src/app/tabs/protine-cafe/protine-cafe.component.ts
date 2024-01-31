import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-protine-cafe',
  templateUrl: './protine-cafe.component.html',
  styleUrls: ['./protine-cafe.component.css']
})
export class ProtineCafeComponent {
  protineCafes:any = []
  filteredData:any=[]
  productInfo:boolean = false;
  
  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'protine-cafe' && item.useOfProduct === "list"){
          this.protineCafes.push(item)
        }
      })
    })
  }
  

  selectedItem(i:any){
    this.filteredData =[]
    this.protineCafes.filter((res:any)=>{
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
