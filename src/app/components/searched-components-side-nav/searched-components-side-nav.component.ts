import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategory } from 'src/app/models/productCategory.model';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-searched-components-side-nav',
  templateUrl: './searched-components-side-nav.component.html',
  styleUrls: ['./searched-components-side-nav.component.css']
})
export class SearchedComponentsSideNavComponent implements OnInit{

  @Input() category!: string;
  @Input() searchKey!: string;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter<any>();

  productCategories: ProductCategory[] = [];
  selectedCategory!: string;

  constructor(private productCategoryService: ProductCategoryService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.productCategoryService.getAllProductCategory().subscribe((data)=>{
      if(data.success){
        this.productCategories = data.result;
      }
    })

    this.selectedCategory = this.category;
  }

  getSelectedProductByCategory(category: string){
    this.selectedCategory = category;
    this.notifyParent.emit(category);
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

