import { Customer } from "./customer.model";
import { OrderItem } from "./orderItem.model";

export class Order{
    order_id!: number;
    order_no!: number;
    order_status!: string;
    customer!: Customer;
    orderItem!: OrderItem[];
    order_date!: Date;
    ship_date!: Date;
    delivery_slot!: String;
    delivery_date!: Date;
    total_price!: number;
    total_item_qty!: number;
    order_address!: string;
    order_phone_no!: number;
    order_email!: string;
    payment_status!: boolean;
    payment_id!: number;
    payment_date!: Date;
    paid_amount!: number;
}