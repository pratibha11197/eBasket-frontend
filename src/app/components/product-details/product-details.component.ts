import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ResponseHandler } from 'src/app/models/response-handler.model';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product!: Product;
  productId!: number;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private customerService: CustomerService) {}
  
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe((data) =>
    {  
    if(data.result)
       this.product = data.result;
    }
    )
  }

  addToCart(productId: number){
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login')
      return
    }

    let token = localStorage.getItem('token');

    this.customerService.getUserByToken(token).subscribe((data: ResponseHandler) => {
      if (data.success) {
        let userId = data.result.customer_id;
        this.productService.addProductToCart(productId, userId, 1).subscribe((data) => {
          if (data) {
            alert("Product added to Cart");
          }
          else {
            alert("Product Not added to Cart");
          }
        }
        )
      }
    }, (error: ErrorEvent) => {
      console.log(error);
    })
  }
}
