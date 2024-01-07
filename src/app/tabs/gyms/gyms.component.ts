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
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'gym'){
          this.gyms.push(item)
        }
      })
    })
  }
  
  ngOnInit(){
  }


  gyms = [
    {image:'/assets/gym-imgs/2.jpg',
    name:'Hello GYM',
     description:'Hello GYM',
    },
    {image:'/assets/gym-imgs/3.jpg',
    name:'Hello GYM',
     description:'Hello GYM',
    },
    {image:'/assets/gym-imgs/6.jpg',
    name:'Hello GYM',
     description:'Hello GYM',
    }
   
  ]

}
