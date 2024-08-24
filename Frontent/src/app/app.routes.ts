import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'login' , pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent   
    },
    {
        path:"signup",
        component: SignUpComponent
    },
    {
        path:"dashboard",
        component: DashboardComponent
    }
  
    
];
