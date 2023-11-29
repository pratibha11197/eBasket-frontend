import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-searched-components',
  templateUrl: './searched-components.component.html',
  styleUrls: ['./searched-components.component.css']
})
export class SearchedComponentsComponent implements OnInit {

  searchKey: string = "";
  searchedProducts: Product[] = [];
  itemQty: number[] = [];
  selectedCategory: string = 'All';
  criteria: string = 'Relevence';

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
    route.queryParams.subscribe(p => {
      if (this.searchKey != p['searchKey']) {
        this.searchKey = p['searchKey'];
      }
      if (this.selectedCategory != p['category']) {
        this.selectedCategory = p['category'];
      }
      if (this.criteria != p['sortBy']) {
        this.criteria = p['sortBy'];
      }
      this.getSelectedProductByCategoryAndCriteria(this.selectedCategory, this.criteria);
    });
  }

  ngOnInit(): void {
    this.getSelectedProductByCategoryAndCriteria(this.selectedCategory, this.criteria);
  }

  addToCart(productId: number, i: number) {
    const userId = 1;
    if(this.itemQty[i] <= 0){
      alert("Please add valid item quantity");
    }
    else{
    this.productService.addProductToCart(productId, userId, this.itemQty[i]).subscribe((data) => {
      alert(data.message);
    }
    )
  }
  }

  getSelectedProductByCategoryAndCriteria(category: string, criteria: string) {
    this.selectedCategory = category;
    this.searchKey = this.route.snapshot.queryParams['searchKey'];
    this.criteria = this.route.snapshot.queryParams['sortBy'];
    if (category != 'All') {
      this.productService.getProductsByCategoryAndCriteria(this.selectedCategory, this.searchKey, this.criteria).subscribe(
        (data) => {
          if (data.success)
            this.searchedProducts = data.result;
          this.itemQty = Array(this.searchedProducts.length).fill(1);
        }
      );
    } else {
      this.productService.getAllProducts(this.searchKey, this.criteria).subscribe((data) => {
        if (data.success) {
          this.searchedProducts = data.result;
          this.itemQty = Array(this.searchedProducts.length).fill(1);
        }
      })
    }
  }

  sortProducts(criteria: string) {
    this.router.navigate(['/search-product'], { queryParams: { searchKey: this.searchKey, category: this.selectedCategory, sortBy: criteria } });
  }

}
