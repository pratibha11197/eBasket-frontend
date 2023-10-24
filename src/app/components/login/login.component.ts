import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm!: FormGroup;

  constructor(private customerService: CustomerService, private router: Router){}

  ngOnInit(): void {
   this.loginForm = this.buildLoginForm();
  }

  buildLoginForm(): FormGroup{
      return new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
    })
  }

  login(loginFormValue: any){
    this.customerService.loginCustomer(loginFormValue).subscribe((data) => {
      if(data.token){
        localStorage.setItem('token', data.token);
        this.loginForm = this.buildLoginForm();
        this.router.navigate(['/']);
        console.log(data);
        alert("Login successful.");
      }
      else
        alert("Failed to Login.");
    })
  }
}
