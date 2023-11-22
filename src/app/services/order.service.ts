import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseHandler } from "../models/response-handler.model";


@Injectable({
    providedIn: 'root'
})
export class OrderService {

    backendUrl = "http://localhost:8080/ecommerce";

    constructor(private http: HttpClient) { }

    order(userId: number, cartId: any): Observable<ResponseHandler> {
        return this.http.post<ResponseHandler>(this.backendUrl + "/order", {}, {
            params: { 'userId': userId, 'cartId': cartId }
        });
    }

    getAllOrders(userId: number): Observable<ResponseHandler> {
        return this.http.get<ResponseHandler>(this.backendUrl + "/orders/" + userId);
    }
}