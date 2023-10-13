import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nevigation-bar',
  templateUrl: './nevigation-bar.component.html',
  styleUrls: ['./nevigation-bar.component.css']
})
export class NevigationBarComponent {

  searchKey: string = "";

  constructor(private router:Router){}

  searchProduct(){
    this.router.navigate(['/search-product'], { queryParams: {searchKey: this.searchKey}});
  }

}
