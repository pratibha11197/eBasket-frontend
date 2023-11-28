import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { Order } from 'src/app/models/order.model';
import { OrderItem } from 'src/app/models/orderItem.model';
import { ResponseHandler } from 'src/app/models/response-handler.model';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
  
  orderId: number = 0;
  orderDetails!: Order;
  items: OrderItem[] = []; 
  user!: Customer;
  
  constructor(private orderSrvice: OrderService, private route:ActivatedRoute, private router: Router, private customerService: CustomerService){}

  ngOnInit(): void {

    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login')
      return
    }

    let token = localStorage.getItem('token');

    this.customerService.getUserByToken(token).subscribe((data: ResponseHandler) => {
      if (data.success) {
        this.user = data.result;
        this.orderId = this.route.snapshot.params["id"];
        this.getOrderById(this.orderId);
        this.getOrderItemsById(this.orderId);
      }
    }, (error: ErrorEvent) => {
      console.log(error);
    })
  }

  getOrderById(orderId: number){
      this.orderSrvice.getOrderById(orderId).subscribe(data => {
        if(data.success){
          this.orderDetails = data.result;
        }
        else{
          alert("Failed to fetch order details!")
        }
      })
  }

  getOrderItemsById(orderId: number){
    this.orderSrvice.getOrderedItemsById(orderId).subscribe(data => {
      if(data.success){
        this.items = data.result;
      }
      else{
        alert("Failed to fetch Ordered Items!")
      }
    })
}

}
