import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  allCartItems: CartItem[] = [];
  userId!: number;
  cartTotalSaving!: number;
  cartSubtotal!: number;
  cartTotalItems!: number;
  cartNo!: number;

  constructor(private cartService: CartService, private route: ActivatedRoute, private orderService: OrderService, private router: Router){}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(){
    this.userId = this.route.snapshot.params['userId'];
    this.cartService.getCartItems(this.userId).subscribe((data) => {
      if (data.success){
        this.allCartItems = data.result;
        this.cartNo = this.allCartItems.length;
        this.getCartSubTotals(this.allCartItems);
      } 
    })
  }

  getCartSubTotals(cartItems: CartItem[]){

    this.cartSubtotal = 0;
    this.cartTotalItems = 0;
    this.cartTotalSaving = 0;
      for (let cartItem of cartItems) {
          this.cartSubtotal += (cartItem.price * cartItem.quantity);
          this.cartTotalSaving += (cartItem.discount * cartItem.quantity);
          this.cartTotalItems += cartItem.quantity;
      }
  }

  deleteCartItem(cartProductId: number ){
    this.cartService.deleteCartItem(cartProductId).subscribe((data) => {
      if(data.success){
       this.getCartItems();
      }
      alert(data.message);
    })
  }

  order(){
     this.orderService.order(this.userId, this.allCartItems[0].cart.cart_id).subscribe((data) => {
      if(data.success){
        this.getCartItems();
        this.router.navigateByUrl('/order-success');
       }
       else{
         alert(data.message);
       }
     })
  }

}
