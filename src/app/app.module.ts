import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './components/login-registration/login-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './afterLogin/home/home.component';
import { GymsComponent } from './tabs/gyms/gyms.component';
import { ProtineComponent } from './tabs/protine/protine.component';
import { GymEquipmentComponent } from './tabs/gym-equipment/gym-equipment.component';
import { HouseKeepingComponent } from './tabs/house-keeping/house-keeping.component';
import { PersonalTrainerComponent } from './tabs/personal-trainer/personal-trainer.component';
import { DietPlanComponent } from './tabs/diet-plan/diet-plan.component';
import { GymRequirementComponent } from './tabs/gym-requirement/gym-requirement.component';
import { MachineRepairComponent } from './tabs/machine-repair/machine-repair.component';
import { ProtineCafeComponent } from './tabs/protine-cafe/protine-cafe.component';
import { SportsWareComponent } from './tabs/sports-ware/sports-ware.component';
import { ServiceComponent } from './afterLogin/service/service.component';
import { AboutComponent } from './afterLogin/about/about.component';
import { ContactComponent } from './afterLogin/contact/contact.component';
import { PageNotFoundComponent } from './afterLogin/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { SellerDashBoardComponent } from './seller/seller-dash-board/seller-dash-board.component';

// -----------------seller- dashboard-------------

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductsComponent } from './seller/products/products.component';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { SellerModule } from './seller/seller.module';
import { GofitComponent } from './components/gofit/gofit.component';

import { ModalModule } from 'ngx-bootstrap/modal';

import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AllProductsComponent } from './admin/all-products/all-products.component';
import { ListAllSellerAndUserComponent } from './admin/list-all-seller-and-user/list-all-seller-and-user.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { DeveloperComponent } from './developer/developer/developer.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { FlipComponent } from './flip/flip.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationComponent,
    LandingPageComponent,
    HomeComponent,
    GymsComponent,
    ProtineComponent,
    GymEquipmentComponent,
    HouseKeepingComponent,
    PersonalTrainerComponent,
    DietPlanComponent,
    GymRequirementComponent,
    MachineRepairComponent,
    ProtineCafeComponent,
    SportsWareComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    FooterComponent,
    AdminLoginComponent,
    SellerLoginComponent,
    SellerDashBoardComponent,
    ProductsComponent,
    AddProductComponent,
    GofitComponent,
    AdminDashboardComponent,
    AllProductsComponent,
    ListAllSellerAndUserComponent,
    AdminHomeComponent,
    DeveloperComponent,
    AdminPageComponent,
    FlipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    // MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    SellerModule,
    ModalModule.forRoot(),
    // Import NgxUiLoaderModule
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    DatePipe
  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
