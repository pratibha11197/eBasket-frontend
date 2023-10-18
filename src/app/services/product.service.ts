import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs/internal/Observable';
import { ResponseHandler } from '../models/response-handler.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  backendUrl = "http://localhost:8080/ecommerce";

  constructor(private http: HttpClient) { }

  public getProductById(id: number): Observable<ResponseHandler> {
    return this.http.get<ResponseHandler>(this.backendUrl + "/product/" + id);
  }

  public addProductToCart(productId: number, userId: number, qty?: number): Observable<ResponseHandler> {
    return this.http.post<ResponseHandler>(this.backendUrl + "/cart/add", {}, {
      params: { 'productId': productId, 'userId': userId, 'qty': qty != null ? qty : 1 }
    });
  }

  public getAllProducts(searchKey?: string): Observable<ResponseHandler> {
    return this.http.get<ResponseHandler>(this.backendUrl + "/products/all", {params: {'searchKey': searchKey != null ? searchKey : "" }});
  }

  public getProductsByCategory(category: string,searchKey?: string): Observable<ResponseHandler> {
    return this.http.get<ResponseHandler>(this.backendUrl + "/products", {params: {'category': category, 'searchKey': searchKey != null ? searchKey : "" }});
  }

}
