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

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router ){
    route.queryParams.subscribe(p => {
    if(this.searchKey !=  p['searchKey']){
    this.searchKey =  p['searchKey']; 
    }
    if(this.selectedCategory !=  p['category']){
      this.selectedCategory =  p['category']; 
      }
      this.getSelectedProductByCategory(this.selectedCategory);
    });
  }

  ngOnInit(): void {
    this.getSelectedProductByCategory(this.selectedCategory);
  }

  addToCart(productId: number, i: number){
    const userId = 1;
    this.productService.addProductToCart(productId, userId, this.itemQty[i]).subscribe((data) =>
    {
      alert(data.message);
    }
    )
  }

  getSelectedProductByCategory(category: string){
    this.selectedCategory = category;
    this.searchKey = this.route.snapshot.queryParams['searchKey'];
    if(category != 'All'){
    this.productService.getProductsByCategory(this.selectedCategory, this.searchKey).subscribe(
      (data) => {
        if(data.success)
        this.searchedProducts = data.result;
        this.itemQty = Array(this.searchedProducts.length).fill(1);
      }
    );
    }else{
      this.productService.getAllProducts(this.searchKey).subscribe((data) => {
        if(data.success){
        this.searchedProducts = data.result;
        this.itemQty = Array(this.searchedProducts.length).fill(1);
        }
      })
    } 
  }

}
