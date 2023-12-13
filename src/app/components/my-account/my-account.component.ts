import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { ResponseHandler } from 'src/app/models/response-handler.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit{

  user!: Customer;

  constructor(private router: Router, private customerService: CustomerService){}

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login')
      return
    }

    let token = localStorage.getItem('token');

    this.customerService.getUserByToken(token).subscribe((data: ResponseHandler) => {
      if (data.success) {
        this.user = data.result;
      }
    }, (error: ErrorEvent) => {
      console.log(error);
    })
  }
  
}
