import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
