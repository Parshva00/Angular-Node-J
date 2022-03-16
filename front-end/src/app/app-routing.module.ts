import { LoginComponent } from './login/login.component';
import { GridComponent } from './grid/grid.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: 'user-form', component: UserFormComponent },
  {path: 'user-form/:id', component: UserFormComponent },
  {path: 'grid', component: GridComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
