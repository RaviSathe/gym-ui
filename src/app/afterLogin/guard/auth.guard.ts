import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';
import { SellerService } from 'src/app/appService/seller.service';

export const authGuard: CanActivateFn = (route, state) => {

  // const currentmenu = route.url[0].path;
  const router = inject(Router);
  const sellerSer_ = inject(SellerService);
  const userSer_ = inject(LoginRegistrationService);


  // if((localStorage.getItem('user') && userSer_.userLoggedIn === true) || (localStorage.getItem('seller') && sellerSer_.sellerLoggedIn === true)){
    if(localStorage.getItem('user') || localStorage.getItem('seller')){
    return true
  }else{
    alert("Access Denied")
    router.navigate(['register-login'])
    return false;
  }
};
