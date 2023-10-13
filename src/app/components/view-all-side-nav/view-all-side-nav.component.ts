import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCategory } from 'src/app/models/productCategory.model';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-view-all-side-nav',
  templateUrl: './view-all-side-nav.component.html',
  styleUrls: ['./view-all-side-nav.component.css']
})
export class ViewAllSideNavComponent implements OnInit{

  @Input() category: any;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  productCategories: ProductCategory[] = [];
  selectedCategory?: string;
  searchKey?: string;

  constructor(private productCategoryService: ProductCategoryService){}

  ngOnInit(): void {
    this.productCategoryService.getAllProductCategory().subscribe((data)=>{
      if(data)
      this.productCategories = data;
    })

    this.selectedCategory = this.category;
  }

  getProductByCategory(category: string){
    this.selectedCategory = category;
    this.notify.emit(category);
  }
  
  getColour(category: string): any{
    if(category == this.selectedCategory){
      return '#5e9400';
    }
    else{
      return 'gray';
    }
  }
}


