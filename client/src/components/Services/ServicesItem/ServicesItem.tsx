import React from 'react';
import {ResponseServicesI} from "@/interface/ResponseInterface";
import style from './ServicesItem.module.sass';
import clsx from "clsx";
import {useDispatch} from "react-redux";
import {changeState} from "@/redux/reducers/orderSlice";
import {TypeForm} from "@/interface/FormInterface";
import {useRouter} from "next/router";
import {ServiceOrderI} from "@/redux/interface/OrderInterface";

const ServicesItem:React.FC<{item:ResponseServicesI, modelName: string}> = ({item, modelName}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const {title, description, price, time, type_price} = item;

    const priceFormated = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
    }).format(price).replace(/(,00)/g, '')
    const handleItemControl = () => {
        const service:ServiceOrderI = {
            title,
            description,
            price,
            time,
            modelName
        }
        dispatch(changeState([
            {name: "service", value: service},
            {name: "typeForm", value: TypeForm.Service},
        ]))
        router.push('/order').then()
    }
    return (
        <li
            onClick={handleItemControl}
            className={style.service}
        >
            <div className={style.serviceBox}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className={clsx([style.serviceBox, style.price])}>
                <h2 className={style.serviceBoxPrice}>{type_price?'от':null} {priceFormated}</h2>
                <p className={style.serviceBoxTime}>{time}</p>
            </div>
        </li>
    );
};

export default ServicesItem;
