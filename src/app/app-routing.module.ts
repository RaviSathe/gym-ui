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
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { SellerModule } from './seller/seller.module';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { SellerDashBoardComponent } from './seller/seller-dash-board/seller-dash-board.component';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { GofitComponent } from './components/gofit/gofit.component';
import { HomePageComponent } from './seller/home-page/home-page.component';

const routes: Routes = [
  // {path:'', redirectTo:'landing-page', pathMatch:'full'},
  {path:'', component:LandingPageComponent , children:[
    {path:'',component:GofitComponent},
    {path:'home',component:HomeComponent},
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

  {path:'',component:HomePageComponent,children:[
    {path:'seller-login',component:SellerLoginComponent},
    {path:'dashboard',component:SellerDashBoardComponent},
    {path:'addProduct',component:AddProductComponent,canActivate:[authGuard]},
  ]},

  {path:'adminDashboard',component:AdminLoginComponent},
 
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
