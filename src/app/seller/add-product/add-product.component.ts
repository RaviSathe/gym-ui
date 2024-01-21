import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  modalRef?: BsModalRef;
  productDetailPage:boolean = false;
  productListingForm!:FormGroup
  constructor(private router:Router,private http: HttpClient, private modalService: BsModalService,
    private _sellerSer:SellerService){}

  ngOnInit(){
    if(localStorage.getItem('form')){
      this.productDetailPage = true
    }

    if(localStorage.getItem('seller')){
      this.router.navigate(['addProduct'])
    }else{
      this.router.navigate(['./seller-login'])
    }

    this.productListingForm = new FormGroup({
      'name' : new FormControl('',Validators.required),
      'useOfProduct' : new FormControl('',Validators.required),
      'image' : new FormControl(''),
      'category' : new FormControl('',Validators.required),
      'description' : new FormControl('',Validators.required),
    })
  }

  backToHome(){
    this.router.navigate(['home'])
  }
  
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  productForm(){
    this.modalRef?.hide()
    this.productDetailPage = true
    localStorage.setItem('form','true')
  }

  addProduct(){
    this._sellerSer.addProductOnPage(this.productListingForm.value).subscribe((res)=>{
      if(res != null){
        console.log(this.productListingForm.value);
        alert("Product Added Successfully")
        this.productDetailPage = false
        localStorage.removeItem('form')
      }else{
        alert("Something went Wrong");      }
    })
  }

  getAllProduct(){
    this._sellerSer.getAllProduct().subscribe((res)=>{
      console.log(res);
      
    })
  }

}