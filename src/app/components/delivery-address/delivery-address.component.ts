import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { Customer } from 'src/app/models/customer.model';
import { ResponseHandler } from 'src/app/models/response-handler.model';
import { AddressServiceService } from 'src/app/services/address-service.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.css']
})
export class DeliveryAddressComponent implements OnInit{
  user!: Customer;
  addresses: Address[] = [];

  constructor(private router: Router, private customerService: CustomerService, private addressService: AddressServiceService){}

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login')
      return
    }

    let token = localStorage.getItem('token');

    this.customerService.getUserByToken(token).subscribe((data: ResponseHandler) => {
      if (data.success) {
        this.user = data.result;
        this.getAddresses(this.user.customer_id);
      }
    }, (error: ErrorEvent) => {
      console.log(error);
    })
  }

  getAddresses(customer_id: number){
      this.addressService.getAddressesByCustomerId(customer_id).subscribe((data: ResponseHandler) => {
        if(data.success)
          this.addresses = data.result;
        else
          alert("Failed to fetch address:  " + data.message);
      })
  }
  
}
