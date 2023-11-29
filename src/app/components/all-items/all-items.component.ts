import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ResponseHandler } from 'src/app/models/response-handler.model';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {

  itemQty: number[] = [];
  allProducts: Product[] = [];
  selectedCategory: string = 'All';

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      if (data.success) {
        this.allProducts = data.result;
        this.itemQty = Array(this.allProducts.length).fill(1);
      }
    })
  }

  addToCart(productId: number, i: number) {

    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login')
      return
    }

    let token = localStorage.getItem('token');

    this.customerService.getUserByToken(token).subscribe((data: ResponseHandler) => {
      if (data.success) {
        let userId = data.result.customer_id;
        if(this.itemQty[i] <= 0){
          alert("Please add valid item quantity.");
        }
        else{
        this.productService.addProductToCart(productId, userId, this.itemQty[i]).subscribe((data) => {
          if (data) {
            alert("Product added to Cart");
          }
          else {
            alert("Product Not added to Cart");
          }
        }
        )
      }
    }
    }, (error: ErrorEvent) => {
      console.log(error);
    })
  }

  getProductsByCategory(category: string) {
    this.selectedCategory = category;
    if (category != 'All') {
      this.productService.getProductsByCategoryAndCriteria(category).subscribe(
        (data) => {
          if (data.success)
            this.allProducts = data.result;
        }
      );
    } else {
      this.productService.getAllProducts().subscribe((data) => {
        if (data.success) {
          this.allProducts = data.result;
          this.itemQty = Array(this.allProducts.length).fill(1);
        }
      })
    }
  }

}
