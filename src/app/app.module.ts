import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './outer-layout/layout/header/header.component';
import { FooterComponent } from './outer-layout/layout/footer/footer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TechnicianComponent } from './pages/technician/technician.component';
import { LayoutComponent } from './outer-layout/layout/layout.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import {LoginComponent} from './pages/outer/login/login.component'
import { HomeComponent } from './pages/outer/home/home.component';
import { AuthInterceptor } from './auth.interceptor'; 
import { AdminLoginComponent } from './pages/outer/admin-login/admin-login.component';
import { TechnicianLoginComponent } from './pages/outer/technician-login/technician-login.component';
import { SidebarComponent } from './outer-layout/layout/sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { EngineComponent } from './vehicle-services/engine/engine.component';
import { GearboxComponent } from './vehicle-services/gearbox/gearbox.component';
import { ClutchComponent } from './vehicle-services/clutch/clutch.component';
import { SuspensionComponent } from './vehicle-services/suspension/suspension.component';
import { BrakePadReplacementComponent } from './vehicle-services/brake-pad-replacement/brake-pad-replacement.component';
import { BrakeFluidComponent } from './vehicle-services/brake-fluid/brake-fluid.component';
import { UserSidebarComponent } from './outer-layout/layout/user-sidebar/user-sidebar.component';
import { TechniciansInfoComponent } from './pages/admin/technicians-info/technicians-info.component';
import { AddTechnicianComponent } from './pages/admin/add-technician/add-technician.component';
import { EditTechnicianComponent } from './pages/admin/edit-technician/edit-technician.component';
import { UserRequestsComponent } from './pages/admin/user-requests/user-requests.component';
import { UserRegisterComponent } from './pages/admin/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    TechnicianComponent,
    LayoutComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    AdminLoginComponent,
    TechnicianLoginComponent,
    SidebarComponent,
    UserRegisterComponent,
    AboutComponent,
    EngineComponent,
    GearboxComponent,
    ClutchComponent,
    SuspensionComponent,
    BrakePadReplacementComponent,
    BrakeFluidComponent,
    UserSidebarComponent,
    TechniciansInfoComponent,
    AddTechnicianComponent,
    EditTechnicianComponent,
    UserRequestsComponent,
    UserRegisterComponent
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

