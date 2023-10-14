import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { SearchedComponentsComponent } from './components/searched-components/searched-components.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {path:'product/:id', component: ProductDetailsComponent},
  {path: 'cart/:userId', component: CartComponent},
  {path: 'search-product', component: SearchedComponentsComponent},
  {path: ':userId/checkout', component: CheckoutComponent},
  {path: '', component: AllItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
