import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TrendingListComponent } from 'src/app/pages/trending-list/trending-list.component';
import { CreateTrendingComponent } from 'src/app/pages/create-trending/create-trending.component';
import { UpdatePaymentComponent } from 'src/app/pages/update-payment/update-payment.component';
import { RegisteredListComponent } from 'src/app/pages/registered-list/registered-list.component';

export const AdminLayoutRoutes: Routes = [
    // { path: 'dashboard',      component: DashboardComponent },
    { path: 'trending-list',   component: TrendingListComponent },
    { path: 'create-trending',   component: CreateTrendingComponent },
    { path: 'update-payment/:fullName/:amount/:paymentReference/:bookingCode',   component: UpdatePaymentComponent },
    { path: 'registered-list',   component: RegisteredListComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'tables',         component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent }
];
