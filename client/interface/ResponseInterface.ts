export interface ResponseDeviceI {
    id: number;
    memory: null|string;
    country: null|string;
    wifi: null|string;
    proc: null|string,
    conf: null|string;
    size: null|string;
    loop_type: null|string;
    loop_size: null|string;
    year: null|string;
    price: number;
    device_model_id: number;
    device_color_id: number;
}

export interface ResponseTypeModelI {
    id: number;
    title: string;
    slug: string;
    device_type_id: number;
    device_services: []
    devices: ResponseDeviceI[]
}

export interface ResponseTypesI {
    id: number;
    title: string;
    icon_name: string;
    slug: string;
    device_models: [] | ResponseTypeModelI[];
}

export interface ResponseDeviceColorI {
    id: number;
    title: string;
    first_color: string;
    second_color: string;
}
