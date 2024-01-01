import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

    registerForm!: FormGroup;

  constructor(private customerService: CustomerService, private router:Router){}

  ngOnInit(): void {
    this.registerForm = this.buildRegistrationForm();
  }
 
  buildRegistrationForm(): FormGroup{
    return new FormGroup({
      customer_id: new FormControl(0),
      customer_name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      phone_no: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    })
  }

  register(registerFormValue: any){
    this.customerService.registerCustomer(registerFormValue).subscribe((data) => {
      if(data.success){
        this.registerForm = this.buildRegistrationForm();
        this.router.navigate(['/login']);
      }
      alert(data.message);
    })
  }

}
