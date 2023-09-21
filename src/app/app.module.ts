import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
// import { RegisteredListComponent } from './pages/registered-list/registered-list.component';
// import { UpdatePaymentComponent } from './pages/update-payment/update-payment.component';
// import { CreateTrendingComponent } from './pages/create-trending/create-trending.component';
// import { TrendingListComponent } from './pages/trending-list/trending-list.component';
// import { BookingListComponent } from './pages/booking-list/booking-list.component';
// import { BookingComponent } from './pages/booking/booking.component';
// import { HomeComponent } from './components/home/home.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    // RegisteredListComponent,
    // UpdatePaymentComponent,
    // CreateTrendingComponent,
    // TrendingListComponent,
    // BookingListComponent,
    // BookingComponent
    // HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
