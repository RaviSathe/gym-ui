import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-personal-trainer',
  templateUrl: './personal-trainer.component.html',
  styleUrls: ['./personal-trainer.component.css']
})
export class PersonalTrainerComponent {

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'personal-trainer'){
          this.personalTrainer.push(item)
        }
      })
    })
  }
  
  personalTrainer:any = [
    
  ]

}
