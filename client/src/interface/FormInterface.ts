export enum TypeForm {
    Order="OrderForm",
    Service="ServiceForm",
    TradeIn="TradeInForm",
}

export interface ServiceInfo {
    title:string;
    description: string;
    price: string;
    additionalInformation: string;
    model?: string
}

export interface FormI {
    title: string;
    subTitle: string|null;
    desc: string|null;
    type: string;
    data: ServiceInfo | null;
}

export interface FormInputI {
    icon: string;
    placeholder: string;
    name: string;
    requred: boolean;
    type: string;
}



