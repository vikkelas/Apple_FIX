import {TypeForm} from "@/interface/FormInterface";

export interface InfoI {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    linkTitle?: string;
    typeForm?: TypeForm
}

export interface TemplateDataI {
    [key:string]: InfoI
}

export interface TextItem {
    title: string;
    list: string[];
}

export interface TextTemplateDataI {
    [key:string]:TextItem[]
}

export interface TemplateListItemDataI {
    title: string;
    description: string;
}

export interface TemplateListDataI {
    [key:string]: {
        title:string;
        list: TemplateListItemDataI[]
    }
}

export interface TemplateTextListItemI{
    title: string,
    text: string
}

export interface TemplateTextListI {
    [key:string]: {
        title: string,
        list: TemplateTextListItemI[]
    }
}


