import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { SearchedComponentsComponent } from './components/searched-components/searched-components.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { EditDeliveryAddComponent } from './components/edit-delivery-add/edit-delivery-add.component';

const routes: Routes = [
  {path:'product/:id', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'search-product', component: SearchedComponentsComponent},
  {path: ':userId/checkout', component: CheckoutComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  {path: 'order-details/:id', component: OrderDetailsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'view-all', component: AllItemsComponent},
  {path: 'my-account', component: MyAccountComponent},
  {path: 'my-account/profile/edit', component: EditAccountComponent},
  {path: 'my-account/delivery-add/edit', component: EditDeliveryAddComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
