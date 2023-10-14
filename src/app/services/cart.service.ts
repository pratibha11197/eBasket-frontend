import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  backendUrl = "http://localhost:8080/ecommerce";  

  constructor(private http: HttpClient) { }

  getCartItems(userId: number): Observable<CartItem[]>{
    return this.http.get<CartItem[]>(this.backendUrl + "/cart/" + userId);
  }

  deleteCartItem(cartProductId: number){
    return this.http.delete(this.backendUrl + "/cart/" + cartProductId);
  }

  decreaseIncreaseItemQty(cartProductId: number, qty: number) {
    return this.http.get<String>(this.backendUrl + "/cart/incDesCartItemQty?cartProductId=" + cartProductId + "&qty=" + qty);
  }

}
