import React from 'react';
import style from './CashbackTemplate.module.sass';
import Link from "next/link";

const CashbackTemplate = () => {
    return (
        <div className={style.container}>
            <h1>Кэшбэк, которым можно оплачивать до 50% стоимости покупки</h1>
            <p><Link href={"https://app.boomerangme.cards/home/getpassform/1660"}>Оформите накопительную карту</Link> Apple Fix и получайте кэшбэк до 10% со следующей покупки! Карта будет удобно храниться в приложение Wallet, где можно отслеживать актуальный статус и баланс. </p>
            <p>Кэшбэк начисляется баллами, 1 балл = 1 рублю.</p>
            <p>За что начисляется:</p>
            <ul className={style.containerList}>
                <li className={style.containerListItem}>
                    <span className={style.containerListItemCount}>1</span>
                    <span>AirPods</span>
                </li>
                <li className={style.containerListItem}>
                    <span className={style.containerListItemCount}>2</span>
                    <span>Любой ремонт</span>
                </li>
                <li className={style.containerListItem}>
                    <span className={style.containerListItemCount}>3</span>
                    <span>Любые аксессуары</span>
                </li>
                <li className={style.containerListItem}>
                    <span className={style.containerListItemCount}>4</span>
                    <span>Защитные стекла</span>
                </li>
            </ul>
            <p>На что можно списать баллы:</p>
            <ul className={style.containerList}>
                <li className={style.containerListItem}>
                    <span className={style.containerListItemCount}>1</span>
                    <span>AirPods</span>
                </li>
                <li className={style.containerListItem}>
                    <span className={style.containerListItemCount}>2</span>
                    <span>Любые аксессуары</span>
                </li>
                <li className={style.containerListItem}>
                    <span className={style.containerListItemCount}>3</span>
                    <span>Защитные стекла</span>
                </li>
            </ul>
            <p>Cashback не начисляется за покупку техники Apple, кроме AirPods.</p>
            <p>Cashback не списывается при ремонте.</p>
            <p>Cashback не списывается при покупке техники Apple, кроме AirPods.</p>
            <Link
                className={style.containerBtn}
                href={"https://app.boomerangme.cards/home/getpassform/1660"}
            >
                Выпустить карту
            </Link>
        </div>
    );
};

export default CashbackTemplate;
