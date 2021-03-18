import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCComponent } from './auth/auth-c/auth-c.component';
import { RegisterComponent } from './auth/auth-c/register/register.component';

const routes: Routes = [
  {path:'RegisterandLogin',component:AuthCComponent,
children:[
  {path:'register',component:RegisterComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
