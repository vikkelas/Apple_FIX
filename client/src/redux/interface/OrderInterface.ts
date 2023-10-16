import {TypeForm} from "@/interface/FormInterface";

export interface DeviceOrderI {
    title: string;
    desc: string;
    price: string;
}

export interface ServiceOrderI {
    title: string;
    description: string;
    price: number;
    time: string;
    modelName: string;
}

export interface OrderI {
    typeForm: TypeForm|null;
    device: DeviceOrderI|null;
    service: ServiceOrderI|null;
    name: string;
    phone: string;
    time: string;
}

