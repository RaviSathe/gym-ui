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

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'register-login',component:LoginRegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'gyms',component:GymsComponent},
  {path:'diet-plan',component:DietPlanComponent},
  {path:'gym-equipment',component:GymEquipmentComponent},
  {path:'gym-requiremnet',component:GymRequirementComponent},
  {path:'house-keeping',component:HouseKeepingComponent},
  {path:'machine-repair',component:MachineRepairComponent},
  {path:'personal-trainer',component:PersonalTrainerComponent},
  {path:'protine',component:ProtineComponent},
  {path:'protine-cafe',component:ProtineCafeComponent},
  {path:'sports-ware',component:SportsWareComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
