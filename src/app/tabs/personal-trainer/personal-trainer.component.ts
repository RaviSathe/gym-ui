import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-personal-trainer',
  templateUrl: './personal-trainer.component.html',
  styleUrls: ['./personal-trainer.component.css']
})
export class PersonalTrainerComponent {
  personalTrainer:any = []
  filteredData:any=[]
  productInfo:boolean = false;

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'personal-trainer' && item.useOfProduct === "list"){
          this.personalTrainer.push(item)
        }
      })
    })
  }
  

  selectedItem(i:any){
    this.filteredData =[]
    this.personalTrainer.filter((res:any)=>{
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
