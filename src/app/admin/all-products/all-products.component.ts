import { Component } from '@angular/core';
import { ProductService } from 'src/app/appService/product.service';
import * as CryptoJS from 'crypto-js'


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  allProduct:any=[]
  sellerData:any

  constructor(private _pro:ProductService){
  }
  
  ngOnInit(){
this.refreshProduct()
    this.sellerData = localStorage.getItem('seller')
  }

  badContent(id:any){
    
    console.log(id);
    console.log(this.allProduct);
    
    // this._pro.giveWarning(this.sellerData.email).subscribe((res)=>{
    //   console.log(res);
      
    // })
  }

  refreshProduct(){
    this._pro.getAllProducts().subscribe((res:any)=>{
      this.allProduct =res
      // console.log(this.allProduct);
    })
  }

  deleteProduct(id:any){
    console.log(id);
    this._pro.deleteProduct(id).subscribe((res)=>{
      console.log("Product Deleted ");
      this.refreshProduct()
    })
  }

}
