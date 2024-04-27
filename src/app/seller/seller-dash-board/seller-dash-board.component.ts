import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'
import { ProductService } from 'src/app/appService/product.service';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-seller-dash-board',
  templateUrl: './seller-dash-board.component.html',
  styleUrls: ['./seller-dash-board.component.css']
})
export class SellerDashBoardComponent {
  decryptedSeller: any;
 productDetailPage:boolean = false;
 productListingForm!:FormGroup;
 sellerID:any
 allProduct:any=[]
 searchText='';

 constructor(private router:Router,private _sellerSer:SellerService,private _productService:ProductService){}

 ngOnInit(){
  this.decryptData()
  if(localStorage.getItem('seller')){
    this.router.navigate(['dashboard'])
  }else{
    this.router.navigate(['./seller-login'])
  }
  this.sellerID = localStorage.getItem('id')

  this.productListingForm = new FormGroup({
    'productName' : new FormControl('',Validators.required),
    'useOfProduct' : new FormControl('',Validators.required),
    'image' : new FormControl(''),
    'sellerID' : new FormControl(this.sellerID),
    'category' : new FormControl('',Validators.required),
    'description' : new FormControl('',Validators.required),
  })
}


decryptData(){
  if(localStorage.getItem('seller')){
    const eText = localStorage.getItem('seller') || '';
    const decryptedWord = CryptoJS.AES.decrypt(eText , 'data_key')
    this.decryptedSeller = JSON.parse(decryptedWord.toString(CryptoJS.enc.Utf8))
  }
}

logOut(){
  localStorage.removeItem('seller')
  this.router.navigate(['seller-login'])
}

addProduct(){
    this._sellerSer.addProductOnPage(this.productListingForm.value).subscribe((res)=>{
      if(res != null){
        console.log(this.productListingForm.value);
        this.productListingForm.reset()
        alert("Product Added Successfully")
        this.productDetailPage = false
        localStorage.removeItem('form')
      }else{
        alert("Something went Wrong");      }
    })
  }

  getAllProduct(){
    this.allProduct=[]
    this.productDetailPage = false
    this._productService.getAllProducts().subscribe((res:any)=>{
      res.filter((item:any)=>{
        if(item.sellerID == this.sellerID){
          this.allProduct.push(item)
          console.log(this.allProduct);
        }
      })      
    })
  }

  addProductForm(){
    this.productDetailPage = true
  }

  deleteProductById(id:any){
    if(confirm("You want to delete this product permanently ?")){
      this._productService.deleteProduct(id).subscribe((res)=>{
        console.log("Product Deleted Successfully");  
        console.log(res);
        this.getAllProduct()
      })
    }
  }

}
