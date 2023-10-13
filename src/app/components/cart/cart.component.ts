import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userId: number = 1;
  cartItems: CartItem[] = [];
  cartSubtotal: number = 0;
  cartTotalItems: number = 0;
  cartTotalSaving: number = 0;
  cartNo: number = 0;

  constructor(private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.cartService.getCartItems(this.userId).subscribe((data) => {
      if (data){
        this.cartItems = data;
        this.cartNo = this.cartItems.length;
        this.getCartSubTotals(this.cartItems);
      } 
    })
  }

  decreaseIncreaseItemQty(cartProductId: number, qty: number, action: string) {
    if (action == 'increase')
      qty += 1
    if (action == 'decrese')
      qty -= 1

    this.cartService.decreaseIncreaseItemQty(cartProductId, qty).subscribe((data) => {
      // if (data) {
        this.cartService.getCartItems(this.userId).subscribe((data) => {
          if (data){
            this.cartItems = data;
            this.cartNo = this.cartItems.length;
            this.getCartSubTotals(this.cartItems);
          } 
        })
      // }
    });
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

}


