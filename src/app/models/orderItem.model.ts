import { Order } from "./order.model";
import { Product } from "./product.model";

export class orderItem{
    order_item_id!: number;
	product!: Product;
	order!: Order;
	quantity!: number;
}