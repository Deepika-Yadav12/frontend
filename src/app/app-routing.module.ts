import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { TechnicianComponent } from './pages/technician/technician.component';
import { LoginComponent } from './pages/outer/login/login.component';
import { HomeComponent } from './pages/outer/home/home.component';
import { AdminLoginComponent } from './pages/outer/admin-login/admin-login.component';
import { TechnicianLoginComponent } from './pages/outer/technician-login/technician-login.component';
import { AboutComponent } from './about/about.component';
import { EngineComponent } from './vehicle-services/engine/engine.component';
import { GearboxComponent } from './vehicle-services/gearbox/gearbox.component';
import { ClutchComponent } from './vehicle-services/clutch/clutch.component';
import { SuspensionComponent } from './vehicle-services/suspension/suspension.component';
import { BrakePadReplacementComponent } from './vehicle-services/brake-pad-replacement/brake-pad-replacement.component';
import { BrakeFluidComponent } from './vehicle-services/brake-fluid/brake-fluid.component';
import { TechniciansInfoComponent } from './pages/admin/technicians-info/technicians-info.component';
import { AddTechnicianComponent } from './pages/admin/add-technician/add-technician.component';
import { EditTechnicianComponent } from './pages/admin/edit-technician/edit-technician.component';
import { UserRequestsComponent } from './pages/admin/user-requests/user-requests.component';
import { UserRegisterComponent } from './pages/admin/user-register/user-register.component';
import { OuterLayoutComponent } from './layout/outer-layout/outer-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';

const routes: Routes = [

  {
    path: '', component: OuterLayoutComponent,
    children: [
      // { path: 'admin', component: AdminComponent },
      { path: 'user-login', component: LoginComponent },
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'technician', component: TechnicianComponent },
      { path: 'technician-login', component: TechnicianLoginComponent },
      { path: 'user-register', component: UserRegisterComponent },
      { path: 'user', component: UserComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'vehicle-services/engine', component: EngineComponent },
      { path: 'vehicle-services/gearbox', component: GearboxComponent },
      { path: 'vehicle-services/clutch', component: ClutchComponent },
      { path: 'vehicle-services/suspension', component: SuspensionComponent },
      { path: 'vehicle-services/brake-pad-replacement', component: BrakePadReplacementComponent },
      { path: 'vehicle-services/brake-fluid', component: BrakeFluidComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }

    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent,
    children: [
      { path: 'technicians-info', component: TechniciansInfoComponent },
      { path: 'add-technician', component: AddTechnicianComponent },
      { path: 'edit-technician/:id', component: EditTechnicianComponent },
      { path: 'user-requests', component: UserRequestsComponent },
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      { path: '', component: UserHomeComponent },
      { path: 'user-profile', component: UserProfileComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
