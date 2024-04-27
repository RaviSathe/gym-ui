import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller.component';
import { authGuard } from 'src/app/afterLogin/guard/auth.guard';
import { AddProductComponent } from '../add-product/add-product.component';
import { SellerDashBoardComponent } from '../seller-dash-board/seller-dash-board.component';
import { SellerLandingPageComponent } from '../seller-landing-page/seller-landing-page.component';
import { SellerLoginComponent } from '../seller-login/seller-login.component';
import { SellerHomePageComponent } from '../seller-home-page/seller-home-page.component';

const routes: Routes = [{ path: '', component: SellerHomePageComponent },
    {path:'seller-landing',component:SellerLandingPageComponent},
    {path:'seller-login',component:SellerLoginComponent},
    {path:'dashboard',component:SellerDashBoardComponent,canActivate:[authGuard]},
    {path:'addProduct',component:AddProductComponent,canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
