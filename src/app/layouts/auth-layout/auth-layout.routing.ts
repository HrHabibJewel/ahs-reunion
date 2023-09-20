import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'home',       component: HomeComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent }
];
