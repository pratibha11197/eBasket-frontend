import { Customer } from "./customer.model";

export class Address {
    address_id!: number;
    receiver_name!: string;
    phone_no!: number;
    house_no!: string;
    apartment_name!: string;
    street!: string;
    landmark!: string;
    area_details!: string;
    city!: string;
    pin!: number;
    add_type!: string;
    customer!: Customer;
    default_add!: boolean;
}