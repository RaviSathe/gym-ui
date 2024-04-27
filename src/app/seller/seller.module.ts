import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller/seller-routing.module';
import { SellerComponent } from './seller/seller.component';


@NgModule({
  declarations: [
    SellerComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule {
  constructor(){
    console.log("Seller Module");
    
  }
 }
