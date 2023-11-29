import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NevigationBarComponent } from './components/nevigation-bar/nevigation-bar.component';
import { CartComponent } from './components/cart/cart.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { ViewAllSideNavComponent } from './components/view-all-side-nav/view-all-side-nav.component';
import { SearchedComponentsComponent } from './components/searched-components/searched-components.component';
import { SearchedComponentsSideNavComponent } from './components/searched-components-side-nav/searched-components-side-nav.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutHeaderComponent } from './components/checkout-header/checkout-header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyAccountSideNavComponent } from './components/my-account-side-nav/my-account-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    NevigationBarComponent,
    CartComponent,
    CartHeaderComponent,
    AllItemsComponent,
    ViewAllSideNavComponent,
    SearchedComponentsComponent,
    SearchedComponentsSideNavComponent,
    CheckoutComponent,
    CheckoutHeaderComponent,
    HomePageComponent,
    RegisterComponent,
    LoginComponent,
    OrderSuccessComponent,
    OrdersComponent,
    OrderDetailsComponent,
    MyAccountComponent,
    MyAccountSideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
