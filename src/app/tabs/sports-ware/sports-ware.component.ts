import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-sports-ware',
  templateUrl: './sports-ware.component.html',
  styleUrls: ['./sports-ware.component.css']
})
export class SportsWareComponent {
  sportsWare:any = []
  filteredData:any=[]
  productInfo:boolean = false;

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'sportware' && item.useOfProduct === "list"){
          this.sportsWare.push(item)
        }
      })
    })
  }
  

  selectedItem(i:any){
    this.filteredData =[]
    this.sportsWare.filter((res:any)=>{
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
