import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseHandler } from '../models/response-handler.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  backendUrl = "http://localhost:8080/ecommerce";  

  constructor(private http: HttpClient) { }
  
  getAddressesByCustomerId(customer_id: number) : Observable<ResponseHandler> {
    return this.http.get<ResponseHandler>(this.backendUrl + "/address/" + customer_id);
  }
  
}
