import { Cart } from "./cart.model";
import { Product } from "./product.model";

export class CartItem{
    cartProductId!: number;
	cart!: Cart;
	product!: Product;
    price!: number;
    discount!: number;
    quantity!: number;
}