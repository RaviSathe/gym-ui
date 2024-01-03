import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  sellerLoggedIn:boolean = false;

  public registerSeller(sellerData:any){
    return this.http.post('http://localhost:9090/seller/register',sellerData)
  }

  public getAllSeller(){
    return this.http.get('http://localhost:9090/seller/getAllSeller')
  }

  public loginSeller(sellerLogin:any){
    return this.http.post('http://localhost:9090/seller/login',sellerLogin)
  }

}
