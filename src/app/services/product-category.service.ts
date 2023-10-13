import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../models/productCategory.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private backendUrl = "http://localhost:8080/ecommerce";
  constructor(private http: HttpClient) { }

  getAllProductCategory(): Observable<ProductCategory[]>{
    return this.http.get<ProductCategory[]>(this.backendUrl + "/productCategory/all");
  }
}
