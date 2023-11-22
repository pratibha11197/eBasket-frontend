import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategory } from 'src/app/models/productCategory.model';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nevigation-bar',
  templateUrl: './nevigation-bar.component.html',
  styleUrls: ['./nevigation-bar.component.css']
})
export class NevigationBarComponent implements OnInit{

  searchKey: string = "";
  productCategories: ProductCategory[] = [];

  constructor(private router:Router, private productCategoryService: ProductCategoryService){}

  ngOnInit(): void {
    this.productCategoryService.getAllProductCategory().subscribe((data)=>{
      if(data.success)
      this.productCategories = data.result;
    })
  }

  searchProduct(){
    this.router.navigate(['/search-product'], { queryParams: {searchKey: this.searchKey, category: 'All'}});
  }

}
