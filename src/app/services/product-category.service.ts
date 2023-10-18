import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../models/productCategory.model';
import { ResponseHandler } from '../models/response-handler.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private backendUrl = "http://localhost:8080/ecommerce";
  constructor(private http: HttpClient) { }

  getAllProductCategory(): Observable<ResponseHandler>{
    return this.http.get<ResponseHandler>(this.backendUrl + "/productCategory/all");
  }
}
