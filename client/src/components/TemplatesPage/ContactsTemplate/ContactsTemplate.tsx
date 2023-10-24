import React from 'react';
import style from './ContactsTemplate.module.sass';
import SocialMedia from "@/components/Assets/SocialMedia/SocialMedia";
import Link from "next/link";

const ContactsTemplate = () => {
    return (
        <div className={style.container}>
            <div className={style.containerSocial}>
                <h2>Социальные сети и мессенджеры</h2>
                <div style={{paddingRight: "50px"}}>
                    <SocialMedia phone={false}/>
                </div>
            </div>
            <ul className={style.containerList}>
                <li>
                    <h2>Адрес</h2>
                    <p>
                        Сергиев Посад<br/>
                        пр-т Красной Армии, д. 12<br/>
                        (вход справа от Сбербанка)
                    </p>
                    <Link href={'https://yandex.ru/maps/org/apple_fix/1279673815/'}>
                        Показать на карте
                    </Link>
                </li>
                <li>
                    <h2>Телефон</h2>
                    <Link href={'tel:+79251656555'}>+7 (925) 165-65-55</Link>
                </li>
                <li>
                    <h2>Режим работы</h2>
                    <p>Ежедневно с 10:00 до 20:00</p>
                </li>
            </ul>
        </div>
    );
};

export default ContactsTemplate;
