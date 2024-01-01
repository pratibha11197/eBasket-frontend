import { Cart } from "./cart.model";

export class Customer{
    customer_id!: number;
    customer_name!: string;
    email!: string;
    password!: string;
    phone_no!: number;
	cart!: Cart;
}