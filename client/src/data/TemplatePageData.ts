import {
    TemplateDataI,
    TemplateListDataI,
    TemplateTextListI,
    TextTemplateDataI
} from "@/interface/PageTamplateInterface";
import {TypeForm} from "@/interface/FormInterface";

const TemplatePageData:TemplateDataI = {
    "about-us": {
        title: "Apple Fix",
        subtitle: "в Сергиевом Посаде",
        description: "Нам доверяют более <strong>10 000</strong> клиентов!",
        icon: "man_hello"
    },
    "trade-in":{
        title: "Trade-In iPhone",
        subtitle: "в Сергиевом Посаде",
        description: "Самый быстрый способ заменить свой старый iPhone на новый!",
        linkTitle: 'Оставить заявку',
        icon: "tradeIn",
        typeForm: TypeForm.TradeIn
    },
    "guarantee":{
        title: "Гарантия",
        subtitle: "в сервисе и магазине",
        description: "Нам доверяют более <strong>10 000</strong> клиентов!",
        icon: "guard",
    },
    "delivery":{
        title: "Доставка",
        subtitle: "товаров и запчастей",
        description: "Нам доверяют более <strong>10 000</strong> клиентов!",
        icon: "delivery",
    },
    "pay":{
        title: "Оплата",
        subtitle: "товаров и услуг",
        description: "Нам доверяют более <strong>10 000</strong> клиентов!",
        icon: "hand_many",
    },
    "cashback":{
        title: "Кэшбэк",
        subtitle: "на товары и услуги",
        description: "Экономьте на покупках в Apple Fix!",
        icon: "fire",
    },
    "reviews":{
        title: "Отзывы",
        subtitle: "о сервисе и магазине",
        description: "Нам доверяют более <strong>10 000</strong> клиентов!\n" +
            "Мы работаем уже <strong>10</strong> лет!",
        icon: "like_hand",
    },
    "contacts":{
        title: "Контакты",
        subtitle: "Apple Fix",
        description: "Нам доверяют более <strong>10 000</strong> клиентов!\n" +
            "Мы работаем уже <strong>10</strong> лет!",
        icon: "addres_book",
    }
}

const TemplateListData:TemplateListDataI = {
    "trade-in": {
        title: "Весь процесс по этапам",
        list: [
            {
                title: "Оценка",
                description: "Бесплатная диагностика iPhone, которая занимает 15-20 минут."
            },
            {
                title: "Доставка и оплата",
                description: "Если Вас всё устраивает, вносите предоплату в размеру суммы доплаты до нового iPhone. Мы делаем заказ и доставим новый телефон за 1-3 дня."
            },
            {
                title: "День обмена",
                description: "Как только новый iPhone будет готов к выдаче, Вы можете прийти и обменять его на старый. Проводится повторная диагностика на предмет отсутствия новых неисправностей и выдача ногово телефона с гарантией 1 год."
            }
        ]
    },
    "about-us": {
        title: "Наши принципы работы",
        list:  [
                    {
                        title: "Оперативность",
                        description: "Быстрая доставка товаров и запчастей от 1 дня, срочный ремонт iPhone от 15 минут"
                    },
                    {
                        title: "Прозрачность",
                        description: "Вы можете проконтроллировать любые процессы в нашем сервисе — от статуса заказа до каждого винтика в iPhone"
                    },
                    {
                        title: "Конфиденциальность",
                        description: "Ваши данные под надежной защитой"
                    },
                    {
                        title: "Качество",
                        description: "Прежде, чем товар поступает на полки магазина, мы тестируем его на собственных гатжетах, а запчасти поступая на склад проходят тройной контроль качества"
                    },
                    {
                        title: "Гарантия",
                        description: "Большая и честная гарантия как на улуги ремонта, так и на новую продукцию Apple"
                    }
                ]
    }

}

const TextTemplateData:TextTemplateDataI = {
    "guarantee": [
        {
            title: "Гарантия на услуги сервисного центра",
            list: [
                "Оригинальные дисплеи и корпуса — 1\u00A0год",
                "Восстановленные оригинальные дисплейные модули — 6\u00A0месяцев",
                "Китайские дисплейные модули — 30\u00A0дней",
                "Аккумуляторы — 6\u00A0месяцев",
                "Все остальные запчасти — 3\u00A0месяца"
            ]
        },
        {
            title: "Гарантия на товары в магазине",
            list: [
                "Новая оригинальная техника Apple — 1\u00A0год",
                "Б/У техника Apple — 3\u00A0месяца",
                "Все остальные товары — 14\u00A0дней",
            ]
        }
    ],
    "delivery": [
        {
            title: "Регламент доставки техники",
            list: [
                "Доставка малогабаритных товаров (iPhone, iPad, Apple Watch и тд) выполняется на следующий будний день (за исключением праздничных дней)",
                "Доставка крупногабаритных товаров (MacBook, Xbox, PlayStation и тд) выполняется в течение 3 будних дней со дня заказа (за исключением праздничных дней)",
            ]
        },
        {
            title: "Доставка запчастей Apple",
            list: [
                "Доставка выполняется каждый будний день (за исключением праздничных дней)",
            ]
        }
    ]
}

const TemplateTextList:TemplateTextListI = {
    "pay": {
        title: "Способы оплаты",
        list: [
            {
                title: "Наличными",
                text: "предпочтительный способ"
            },
            {
                title: "Картой",
                text: "МИР, MasterCard, Visa"
            },
            {
                title: "СПБ перевод",
                text: "оплата через QR-код на счет компании (не по номеру телефона)"
            },
            {
                title: "USDT (TRC20)",
                text: "по предварительной договоренности"
            },
            {
                title: "На расчетный счет",
                text: "счет выставляется без НДС с дополнительной наценкой 6% к цене всех товаров и услуг"
            },

        ]
    }
}

export {TemplatePageData, TemplateListData, TextTemplateData, TemplateTextList};
