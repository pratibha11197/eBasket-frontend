import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product!: Product;
  productId!: number;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe((data) =>
    {  
    if(data)
       this.product = data;
    }
    )
  }

  addToCart(productId: number){
    const userId = 1;
    this.productService.addProductToCart(productId, userId).subscribe((data) =>
    {  if(data){
       alert("Product added to Cart");
    }
    else{
      alert("Product Not added to Cart");
    }
    }
    )
  }
}
