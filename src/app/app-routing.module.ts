import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"",redirectTo:"page1",pathMatch:"full",},
  {path:"page1",component:NavBarComponent,children:[
    {path:"",redirectTo:"Registration",pathMatch:"full"},
    {path:"Registration",component:RegistrationComponent},
    {path:"Login",component:LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
