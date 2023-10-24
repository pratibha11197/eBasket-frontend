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

const routes: Routes = [
  {path:'product/:id', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'search-product', component: SearchedComponentsComponent},
  {path: ':userId/checkout', component: CheckoutComponent},
  {path: 'view-all', component: AllItemsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
