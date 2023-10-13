import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-searched-components',
  templateUrl: './searched-components.component.html',
  styleUrls: ['./searched-components.component.css']
})
export class SearchedComponentsComponent  implements OnInit{
  
  searchKey: string = "";
  searchedProducts: Product[] =[];
  itemQty: number[] = [];  
  selectedCategory: string = 'All';

  constructor(private route: ActivatedRoute, private productService: ProductService){
    route.queryParams.subscribe(p => {console.log(p['searchKey']); 
    this.searchProducts();
    });
  }

  ngOnInit(): void {
    this.searchProducts();
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

  getSelectedProductByCategory(category: string){
    this.selectedCategory = category;
    if(category != 'All'){
    this.productService.getProductsByCategory(category, this.searchKey).subscribe(
      (data) => {
        if(data)
        this.searchedProducts = data;
      }
    );
    }else{
      this.productService.getProductsByCategory(category, this.searchKey).subscribe((data) => {
        if(data){
        this.searchedProducts = data;
        this.itemQty = Array(this.searchedProducts.length).fill(1);
        }
      })
    }
  }

  searchProducts(){
    this.searchKey = this.route.snapshot.queryParams['searchKey'];
    this.productService.getAllProducts(this.searchKey).subscribe((data) => {
      this.searchedProducts = data;
      this.itemQty = Array(this.searchedProducts.length).fill(1);
    })
  }
}
