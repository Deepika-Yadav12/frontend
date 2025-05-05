import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { TechnicianComponent } from './pages/technician/technician.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import {LoginComponent} from './pages/outer/login/login.component'
import { HomeComponent } from './pages/outer/home/home.component';
import { AuthInterceptor } from './auth.interceptor'; 
import { AdminLoginComponent } from './pages/outer/admin-login/admin-login.component';
import { TechnicianLoginComponent } from './pages/outer/technician-login/technician-login.component';
import { AdminSidebarComponent } from './layout/admin-layout/admin-sidebar/admin-sidebar.component';
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
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './layout/admin-layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './layout/admin-layout/admin-footer/admin-footer.component';
import { UserHeaderComponent } from './layout/user-layout/user-header/user-header.component';
import { UserFooterComponent } from './layout/user-layout/user-footer/user-footer.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { UserSidebarComponent } from './layout/user-layout/user-sidebar/user-sidebar.component';
import { OuterLayoutComponent } from './layout/outer-layout/outer-layout.component';
import { OuterHeaderComponent } from './layout/outer-layout/outer-header/outer-header.component';
import { OuterFooterComponent } from './layout/outer-layout/outer-footer/outer-footer.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TechnicianComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    AdminLoginComponent,
    TechnicianLoginComponent,
    AdminSidebarComponent,
    UserRegisterComponent,
    AboutComponent,
    EngineComponent,
    GearboxComponent,
    ClutchComponent,
    SuspensionComponent,
    BrakePadReplacementComponent,
    BrakeFluidComponent,
    TechniciansInfoComponent,
    AddTechnicianComponent,
    EditTechnicianComponent,
    UserRequestsComponent,
    UserRegisterComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserLayoutComponent,
    UserSidebarComponent,
    OuterLayoutComponent,
    OuterHeaderComponent,
    OuterFooterComponent,
    UserProfileComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

