import { JefeDashboardComponent } from './pages/jefe/jefe-dashboard/jefe-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamistaDashboardComponent } from './pages/prestamista/prestamista-dashboard/prestamista-dashboard.component';
import { JefeGuard } from './services/jefe.guard';
import { InversionistaDashboardComponent } from './pages/inversionista/inversionista-dashboard/inversionista-dashboard.component';
import { InversionistaGuard } from './services/inversionista.guard';
import { PrestamistaGuard } from './services/prestamista.guard';
import { PrestatarioDashboardComponent } from './pages/prestatario/prestatario-dashboard/prestatario-dashboard.component';
import { PrestatarioGuard } from './services/prestatario.guard';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    //LLAMA AL COMPONENTE HTML
    path:'inversionista-dashboard',
    component:InversionistaDashboardComponent,
    pathMatch: 'full',
    canActivate: [InversionistaGuard]
  },
  {
    //LLAMA AL COMPONENTE HTML
    path:'jefe-dashboard',
    component:JefeDashboardComponent,
    pathMatch: 'full',
    canActivate: [JefeGuard]
  },
  {
    path:'prestamista-dashboard',
    component:PrestamistaDashboardComponent,
    pathMatch: 'full',
    canActivate:[PrestamistaGuard]
  },
  {
    path:'prestatario-dashboard',
    component:PrestatarioDashboardComponent,
    pathMatch: 'full',
    canActivate:[PrestatarioGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
