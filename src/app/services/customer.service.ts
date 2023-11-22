import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs/internal/Observable';
import { ResponseHandler } from '../models/response-handler.model';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  backendUrl = "http://localhost:8080/ecommerce";  

  constructor(private http: HttpClient) { }

  registerCustomer(customer: any): Observable<ResponseHandler>{

      let createCustomerData: Customer = new Customer();

      createCustomerData.customer_name = customer.customer_name;
      createCustomerData.customer_id = customer.customer_id;
      createCustomerData.email = customer.email;
      createCustomerData.phone_no = customer.phone_no;
      createCustomerData.address = customer.address;
      createCustomerData.password = customer.password;

      console.log(createCustomerData);
      
      return this.http.post<ResponseHandler>(this.backendUrl + "/auth/register", createCustomerData);
  }

  loginCustomer(loginFormValue: any): Observable<Token> {
    return this.http.post<Token>(this.backendUrl + "/auth/login", loginFormValue);
  }

  getUserByToken(token: any): Observable<ResponseHandler> {
    return this.http.get<ResponseHandler>(this.backendUrl + "/customer/byToken");
  }
}
  