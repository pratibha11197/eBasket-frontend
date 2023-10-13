import { CartItem } from "./cartItem.model";
import { Customer } from "./customer.model";

export class Cart{
    cart_id!: number;
	quantity!:number;
	cartItems!: [CartItem];
	customer!: Customer;
}