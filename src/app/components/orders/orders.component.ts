import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { Order } from 'src/app/models/order.model';
import { ResponseHandler } from 'src/app/models/response-handler.model';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  allOrders: Order[] = [];
  user!: Customer;

  constructor(private orderService: OrderService, private router: Router, private customerService: CustomerService) { }
  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login')
      return
    }

    let token = localStorage.getItem('token');


    this.customerService.getUserByToken(token).subscribe((data: ResponseHandler) => {
      if (data.success) {
        this.user = data.result;
        this.getAllOrders(this.user.customer_id);
      }
    }, (error: ErrorEvent) => {
      console.log(error);
    })

  }

  getAllOrders(userId: number) {
    this.orderService.getAllOrders(userId).subscribe((data: ResponseHandler) => {
      if (data.success) {
        this.allOrders = data.result;
      } else {
        alert("Failed to get all orders.");
      }
    })
  }

}
