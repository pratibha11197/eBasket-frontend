import { Cart } from "./cart.model";

export class Customer{
    customer_id!: number;
    customerName!: string;
    email!: string;
    password!: string;
	address!: string;
    phoneNo!: number;
	cart!: Cart;
}