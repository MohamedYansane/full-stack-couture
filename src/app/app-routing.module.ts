import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { CouturierComponent } from './couturier/couturier.component';
import { MesuresComponent } from './mesures/mesures.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ModeratorDashboardComponent } from './moderator-dashboard/moderator-dashboard.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { AuthentificationGuard } from './guard/authentification.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'mesures', component: MesuresComponent },
  { path: 'couturiers', component: CouturierComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'moderator',
    component: ModeratorDashboardComponent,
    canActivate: [AuthentificationGuard],
  },
  { path: 'header-login', component: HeaderLoginComponent },
  { path: 'admin', component: AdminBoardComponent },
  /* {
    path: 'moderator',
    component: ModeratorDashboardComponent,
    children: [
      { path: 'clients', component: ClientListComponent },
      { path: 'mesures', component: MesuresComponent },
      { path: 'couturiers', component: CouturierComponent },
    ],
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
