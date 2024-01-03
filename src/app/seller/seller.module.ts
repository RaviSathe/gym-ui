import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerDashBoardComponent } from './seller-dash-board/seller-dash-board.component';
import { authGuard } from '../afterLogin/guard/auth.guard';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'seller-login',component:SellerLoginComponent},
  {path:'',component:SellerDashBoardComponent,canActivate:[authGuard],children:[
    {path:'seller-addProduct',component:AddProductComponent,canActivate:[authGuard]},
  ]},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class SellerModule { }
