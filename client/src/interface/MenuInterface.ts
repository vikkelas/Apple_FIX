export interface SubMenuI {
    title: string;
    link: string;
}

export interface MenuI {
    icon: string;
    title: string;
    link: string | null;
    subMenu: null | SubMenuI[];
    type?: string;
}


