import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'Profile/:action',component:MyprofileComponent},
  // {path:'Profile/Editprofile',component:MyprofileComponent},
  // {path:'Deleteprofile',component:MyprofileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
