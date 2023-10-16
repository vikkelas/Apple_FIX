import {ReactElement} from "react";


export interface InfoI {
    title: string;
    subtitle: string;
    description: string;
    link?: string;
    linkTitle?: string;
}
export interface PageTamplateI {
    children: ReactElement;
    dataInfo: InfoI
}
