import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  sellerLoggedIn:boolean = false;

  constructor(private router: Router, private _ser:SellerService){
    this._ser.sellerLogin.subscribe(res=>{
      this.sellerLoggedIn = res
    })
  }

  ngOnInit(){
    if(localStorage.getItem('seller')){
      this.sellerLoggedIn = true
    }else{
      this.router.navigate(['./seller'])
    }
  }

  sellerLogin(){
    this.router.navigate(['./seller-login'])
  }

  logoutSeller(){
    if(confirm("You Want to Logout ?")){
      this.router.navigate(['./seller-login'])
      localStorage.removeItem('seller')
      this._ser.sellerLogin.next(false)
    };
  }

}
