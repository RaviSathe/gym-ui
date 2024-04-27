import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegistrationComponent } from './components/login-registration/login-registration.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './afterLogin/home/home.component';
import { DietPlanComponent } from './tabs/diet-plan/diet-plan.component';
import { GymEquipmentComponent } from './tabs/gym-equipment/gym-equipment.component';
import { GymRequirementComponent } from './tabs/gym-requirement/gym-requirement.component';
import { HouseKeepingComponent } from './tabs/house-keeping/house-keeping.component';
import { MachineRepairComponent } from './tabs/machine-repair/machine-repair.component';
import { PersonalTrainerComponent } from './tabs/personal-trainer/personal-trainer.component';
import { ProtineComponent } from './tabs/protine/protine.component';
import { ProtineCafeComponent } from './tabs/protine-cafe/protine-cafe.component';
import { SportsWareComponent } from './tabs/sports-ware/sports-ware.component';
import { GymsComponent } from './tabs/gyms/gyms.component';
import { ServiceComponent } from './afterLogin/service/service.component';
import { ContactComponent } from './afterLogin/contact/contact.component';
import { AboutComponent } from './afterLogin/about/about.component';
import { PageNotFoundComponent } from './afterLogin/page-not-found/page-not-found.component';
import { authGuard } from './afterLogin/guard/auth.guard';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { SellerDashBoardComponent } from './seller/seller-dash-board/seller-dash-board.component';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { SellerHomePageComponent } from './seller/seller-home-page/seller-home-page.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AllProductsComponent } from './admin/all-products/all-products.component';
import { DeveloperComponent } from './developer/developer/developer.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ListAllSellerAndUserComponent } from './admin/list-all-seller-and-user/list-all-seller-and-user.component';
import { ShopComponent } from './afterLogin/shop/shop.component';
import { NoticeComponent } from './admin/notice/notice.component';
import { ProductsComponent } from './seller/products/products.component';
import { SellerLandingPageComponent } from './seller/seller-landing-page/seller-landing-page.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  // {path:'', redirectTo:'landing-page', pathMatch:'full'},

  {path:'', component:HeaderComponent , children:[
    {path:'',component:LandingPageComponent},
    {path:'home',component:HomeComponent},
    {path:'shop',component:ShopComponent},
    {path:'service',component:ServiceComponent},
    {path:'contact-us',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'register-login',component:LoginRegistrationComponent},
    {path:'gyms',component:GymsComponent,canActivate:[authGuard]},
    {path:'diet-plan',component:DietPlanComponent,canActivate:[authGuard]},
    {path:'gym-equipment',component:GymEquipmentComponent,canActivate:[authGuard]},
    {path:'gym-requiremnet',component:GymRequirementComponent,canActivate:[authGuard]},
    {path:'house-keeping',component:HouseKeepingComponent,canActivate:[authGuard]},
    {path:'machine-repair',component:MachineRepairComponent,canActivate:[authGuard]},
    {path:'personal-trainer',component:PersonalTrainerComponent,canActivate:[authGuard]},
    {path:'protine',component:ProtineComponent,canActivate:[authGuard]},
    {path:'protine-cafe',component:ProtineCafeComponent,canActivate:[authGuard]},
    {path:'sports-ware',component:SportsWareComponent,canActivate:[authGuard]},
  ]},

  {path:'',component:SellerHomePageComponent,children:[
    {path:'seller-landing',component:SellerLandingPageComponent},
    {path:'seller-login',component:SellerLoginComponent},
    {path:'dashboard',component:SellerDashBoardComponent,canActivate:[authGuard]},
    {path:'addProduct',component:AddProductComponent,canActivate:[authGuard]},
  ]},
  // { path: '', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) },
  
  {path:'admin-login', component:AdminLoginComponent},
  {path:'',component:AdminPageComponent , children:[
    {path:'admin-dashboard', component:AdminDashboardComponent},
    {path:'admin-all-product-list', component:AllProductsComponent},
    {path:'notice', component:NoticeComponent},
    {path:'all-sellers-and-users', component:ListAllSellerAndUserComponent},
  ]},

  
  {path:'developer',component:DeveloperComponent},
  {path:'product',component:ProductsComponent},
  
 
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
