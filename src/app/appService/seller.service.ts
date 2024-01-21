import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  makeAShop:any
  result:any =[]
  saleOnGofit:any =[]

  constructor(private http:HttpClient) { }

  sellerLogin = new BehaviorSubject(false)

  public registerSeller(sellerData:any){
    return this.http.post('http://localhost:9090/seller/register',sellerData)
  }

  public getAllSeller(){
    return this.http.get('http://localhost:9090/seller/getAllSeller')
  }

  public loginSeller(sellerLogin:any){
    return this.http.post('http://localhost:9090/seller/login',sellerLogin)
  }

  public emailAlreadyExist(emailId:any){
    return this.http.get(`http://localhost:9090/seller/emailExist/${emailId}`)
  }

  public addProductOnPage(productDetails:any){
    return this.http.post('http://localhost:9090/product/addProduct',productDetails)
  }

  public getAllProduct(){
    return this.http.get('http://localhost:9090/product/getAllProducts')
  }

  public getDataInfo(name:any){
    return name
  }

  public showProducts(category:string){
   this.getAllProduct().subscribe((res:any)=>{
      res.filter((item:any)=>{
        if(item.category === category){
         return console.log(res);
        }
      })
    })
  }

  public deleteSellerById(id:any){
    return this.http.delete(`http://localhost:9090/seller/deleteSellerById/${id}`)
  }


}
