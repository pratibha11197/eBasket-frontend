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
      createCustomerData.password = customer.password;

      console.log(createCustomerData);
      
      return this.http.post<ResponseHandler>(this.backendUrl + "/auth/register", createCustomerData);
  }

  editCustomer(userId: number, accountFormValue: any) {
    let userName: string = accountFormValue.user_name;
    let email: string = accountFormValue.email;
    let phoneNo: string = accountFormValue.phone_no;
    return this.http.post<ResponseHandler>(this.backendUrl + "/customer/edit", {}, {
      params: { 'userId': userId, 'userName': userName, 'email': email, 'phone': phoneNo}
  });
  }

  loginCustomer(loginFormValue: any): Observable<Token> {
    return this.http.post<Token>(this.backendUrl + "/auth/login", loginFormValue);
  }

  getUserByToken(token: any): Observable<ResponseHandler> {
    return this.http.get<ResponseHandler>(this.backendUrl + "/customer/byToken");
  }
}
  