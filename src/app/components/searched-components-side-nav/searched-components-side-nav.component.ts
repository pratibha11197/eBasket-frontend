import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCategory } from 'src/app/models/productCategory.model';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-searched-components-side-nav',
  templateUrl: './searched-components-side-nav.component.html',
  styleUrls: ['./searched-components-side-nav.component.css']
})
export class SearchedComponentsSideNavComponent implements OnInit{

  @Input() category: any;
  @Output() searchnotify: EventEmitter<any> = new EventEmitter<any>();

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

  getSelectedProductByCategory(category: string){
    this.selectedCategory = category;
    this.searchnotify.emit(category);
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

