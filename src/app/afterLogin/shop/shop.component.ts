import { Component } from '@angular/core';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';
import { ProductService } from 'src/app/appService/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  searchText=''

  shoppingProducts:any=[]

  constructor(private _pro:ProductService){}

  ngOnInit(){
    this._pro.getAllProducts().subscribe((res)=>{
      res.filter((data:any)=>{
        if(data.useOfProduct === "sale"){
          this.shoppingProducts.push(data)
          console.log(this.shoppingProducts);
        }
      })
    })
  }

}
