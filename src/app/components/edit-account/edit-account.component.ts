import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { ResponseHandler } from 'src/app/models/response-handler.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  user!: Customer;
  accountForm: FormGroup = this.buildAccountForm(this.user);;

  constructor(private customerService: CustomerService, private router: Router){}

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login')
      return
    }

    let token = localStorage.getItem('token');

    this.customerService.getUserByToken(token).subscribe((data: ResponseHandler) => {
      if (data.success) {
        this.user = data.result;
        this.accountForm = this.buildAccountForm(this.user);
      }
    }, (error: ErrorEvent) => {
      console.log(error);
    })

  }

  buildAccountForm(user: Customer): FormGroup{
    if(user == undefined){
      return new FormGroup({
      user_name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phone_no: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    })
  }
  else{
    return new FormGroup({
      user_name: new FormControl(this.user.customer_name, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.email, Validators.required]),
      phone_no: new FormControl(this.user.phone_no, [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    })
  }
  }

  save(accountFormValue: any){
    this.customerService.editCustomer(this.user.customer_id , accountFormValue).subscribe((data: ResponseHandler) => {
      if(data.success){
        this.accountForm = this.buildAccountForm(this.user);
        this.router.navigate(['/my-account']);
        console.log(data);
        alert("Successfully update account details.");
      }
      else
        alert("Failed to save account details.");
    })
  }
}
