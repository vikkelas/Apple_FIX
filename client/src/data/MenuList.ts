import {MenuI} from "@/interface/MenuInterface";

const menuList:MenuI[] = [
    {
        title: "Главная",
        icon: "main",
        link: "/",
        subMenu: null
    },
    {
        title: "Trade-In",
        icon: "tradeIn",
        link: "/trade-in",
        subMenu: null
    },
    {
        title: "Наши ценности",
        icon: "man_hello",
        link: "/about-us",
        subMenu: null
    },
    {
        title: "Гарантия",
        icon: "guard",
        link: "/guarantee",
        subMenu: null
    },
    {
        title: "Доставка",
        icon: "delivery",
        link: "/delivery",
        subMenu: null
    },
    {
        title: "Оплата",
        icon: "hand_many",
        link: "/pay",
        subMenu: null
    },
    {
        title: "Кэшбэк",
        icon: "fire",
        link: "/cashback",
        subMenu: null
    },
    {
        title: "Отзывы",
        icon: "like_hand",
        link: "/reviews",
        subMenu: null
    },
    {
        title: "Контакты",
        icon: "addres_book",
        link: "/contacts",
        subMenu: null
    }
]
export default menuList;
