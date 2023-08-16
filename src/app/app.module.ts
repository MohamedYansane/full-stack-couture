import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClientListComponent } from './client-list/client-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from './navbar/navbar.component';
import { CouturierComponent } from './couturier/couturier.component';
import { MatRadioModule } from '@angular/material/radio';
import { MesuresComponent } from './mesures/mesures.component';
import { MesuresFormComponent } from './mesures-form/mesures-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ModeratorDashboardComponent } from './moderator-dashboard/moderator-dashboard.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    HeaderComponent,
    RegisterFormComponent,
    NavbarComponent,
    CouturierComponent,
    MesuresComponent,
    MesuresFormComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ModeratorDashboardComponent,
    HeaderLoginComponent,
    AdminBoardComponent,
    ForbiddenComponent,
    RegisterUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule, //to handle errors or form control
    MatRadioModule,
  ],
  //if i hadn't put that here i wouldnt be able to send the cookie token in the request
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
