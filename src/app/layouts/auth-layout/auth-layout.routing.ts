import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { BookingComponent } from 'src/app/pages/booking/booking.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'home',       component: HomeComponent },
    { path: 'booking', component: BookingComponent},
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent }
];
