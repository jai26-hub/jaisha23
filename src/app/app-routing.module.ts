import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {
    path:'login',component:LoginComponent
  },
  {
    path:'show',component:ShowComponent
  },
  {path:'edit/:id',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
