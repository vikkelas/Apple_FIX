import {TypeForm} from "@/interface/FormInterface";

export interface DeviceOrder {
    title: string;
    desc: string;
    price: string;
}

export interface OrderI {
    typeForm: TypeForm|null;
    device: DeviceOrder|null;
    service: string |null;
    name: string;
    phone: string;
    time: string;
}

