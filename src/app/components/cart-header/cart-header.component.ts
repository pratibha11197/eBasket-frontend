import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent {

  @Input() cartSubtotal: number = 0;
  @Input() cartTotalItems: number = 0;
  @Input() cartTotalSaving: number = 0;


}
