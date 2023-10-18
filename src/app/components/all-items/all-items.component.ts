import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit{

  itemQty: number[] = [];  
  allProducts: Product[] = [];
  selectedCategory: string = 'All';

  constructor(private productService: ProductService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      if(data.success){
      this.allProducts = data.result;
      this.itemQty = Array(this.allProducts.length).fill(1);
      }
    })
  }

  addToCart(productId: number, i: number){
    const userId = 1;
    this.productService.addProductToCart(productId, userId, this.itemQty[i]).subscribe((data) =>
    {  if(data){
       alert("Product added to Cart");
    }
    else{
      alert("Product Not added to Cart");
    }
    }
    )
  }

  getProductsByCategory(category: string){
    this.selectedCategory = category;
    if(category != 'All'){
    this.productService.getProductsByCategory(category).subscribe(
      (data) => {
        if(data.success)
        this.allProducts = data.result;
      }
    );
    }else{
      this.productService.getAllProducts().subscribe((data) => {
        if(data.success){
        this.allProducts = data.result;
        this.itemQty = Array(this.allProducts.length).fill(1);
        }
      })
    }
  }

}
