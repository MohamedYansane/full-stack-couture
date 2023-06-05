import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { CouturierComponent } from './couturier/couturier.component';


const routes: Routes = [
  {path:"clients",component:ClientListComponent},
  {path:"", redirectTo:"clients",pathMatch:"full"},
  {path:"couturiers", component:CouturierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
