import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-gym-requirement',
  templateUrl: './gym-requirement.component.html',
  styleUrls: ['./gym-requirement.component.css']
})
export class GymRequirementComponent {
  gymRequirements:any = []
  filteredData:any=[]
  productInfo:boolean = false;

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'gym-requirement' && item.useOfProduct === "list"){
          this.gymRequirements.push(item)
        }
      })
    })
  }
  
  selectedItem(i:any){
    this.filteredData =[]
    this.gymRequirements.filter((res:any)=>{
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
