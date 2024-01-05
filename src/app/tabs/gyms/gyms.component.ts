import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent {
  gymStore:any
  searchResult:any

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res)=>{
      this.gymStore = res
      // console.log('res',res);
      this.searchResult = this.gymStore.filter((item: any)=>{
        if(item.category === 'gym'){
          this.searchResult = item
          console.log(this.searchResult);
          this.gyms.push(this.searchResult)
        }
      })
    })
  }


  gyms = [
    {image:'/assets/gym-imgs/2.jpg',
    productName:'Hello GYM',
     description:'Hello GYM',
    },
    {image:'/assets/gym-imgs/3.jpg',
    productName:'Hello GYM',
     description:'Hello GYM',
    },
    {image:'/assets/gym-imgs/6.jpg',
    productName:'Hello GYM',
     description:'Hello GYM',
    }
   
  ]

}
