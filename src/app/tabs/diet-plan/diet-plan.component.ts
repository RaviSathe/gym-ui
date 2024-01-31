import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css']
})
export class DietPlanComponent {

  dietPlan:any = []
  filteredData:any=[]
  productInfo:boolean = false;

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'diet-plan' && item.useOfProduct === "list"){
          this.dietPlan.push(item)
        }
      })
    })
  }

  selectedItem(i:any){
    this.filteredData =[]
    this.dietPlan.filter((res:any)=>{
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
