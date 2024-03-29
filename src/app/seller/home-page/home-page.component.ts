import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

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
      this.router.navigate(['./flip'])
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
