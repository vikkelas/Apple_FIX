import React from 'react';
import style from './TradeInTradeInTemplate.module.sass'
const dataStep = [
    {
        title: "Оценка",
        description: "Бесплатная диагностика iPhone, которая занимает 15-20 минут"
    },
    {
        title: "Доставка и оплата",
        description: "Если Вас всё устраивает, вносите предоплату в размеру суммы доплаты до нового iPhone. Мы делаем заказ и доставим новый телефон за 1-3 дня."
    },
    {
        title: "День обмена",
        description: "Как только новый iPhone будет готов к выдаче, Вы можете прийти и обменять его на старый. Проводится повторная диагностика на предмет отсутствия новых неисправностей и выдача ногово телефона с гарантией 1 год."
    }
]

const TradeInTemplate = () => {
    return (
        <div className={style.tradeIn}>
            <h2 className={style.tradeInTitle}>Весь процесс по этапам:</h2>
            <ul className={style.tradeInList}>
                {dataStep.map((item, index)=>{
                    const {title, description} = item
                    return (
                        <li
                            key={index}
                            className={style.tradeInListItem}
                        >
                            <div className={style.tradeInListItemCount}>{index+1}</div>
                            <div className={style.tradeInListItemInfo}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default TradeInTemplate;
