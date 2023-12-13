import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const currentmenu = route.url[0].path;
  const router = inject(Router);

  if(localStorage.getItem('user')){
    return true
  }else{
    alert("Access Denied")
    router.navigate(['register-login'])
    return false;
  }
};
