import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  sellerLoggedIn:boolean = false;

  constructor(private router: Router){}

  ngOnInit(){}

  sellerLogin(){
    this.router.navigate(['./seller-login'])
  }

  logoutSeller(){
    if(confirm("You Want to Logout ?")){
      this.router.navigate(['./seller-login'])
      localStorage.removeItem('seller')
    };
  }

}
