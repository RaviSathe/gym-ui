import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  public getAllProducts(): Observable<any> {
    return this.http.get<any>('http://localhost:9090/product/getAllProducts');
  }

  public deleteProduct(id:any){
    return this.http.delete(`http://localhost:9090/product/deleteProduct/${id}`)
  }

}
