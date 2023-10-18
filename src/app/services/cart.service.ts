import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem.model';
import { Observable } from 'rxjs';
import { ResponseHandler } from '../models/response-handler.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  backendUrl = "http://localhost:8080/ecommerce";  

  constructor(private http: HttpClient) { }

  getCartItems(userId: number): Observable<ResponseHandler>{
    return this.http.get<ResponseHandler>(this.backendUrl + "/cart/" + userId);
  }

  deleteCartItem(cartProductId: number): Observable<ResponseHandler>{
    return this.http.delete<ResponseHandler>(this.backendUrl + "/cart/" + cartProductId);
  }

  decreaseIncreaseItemQty(cartProductId: number, qty: number): Observable<ResponseHandler> {
    return this.http.get<ResponseHandler>(this.backendUrl + "/cart/incDesCartItemQty?cartProductId=" + cartProductId + "&qty=" + qty);
  }

}
