import React, {useEffect, useState} from 'react';
import Layout from "@/components/Layout/Layout";
import Form from "@/components/Assets/Form/Form";
import {ServiceInfo, TypeForm} from "@/interface/FormInterface";
import {useSelector} from "react-redux";
import {AppState} from "@/redux/rootReducer";
import {useRouter} from "next/router";

const formDate = {
    "OrderForm": {
        title: "Новый заказ",
        subTitle: "Выбранный товар:",
        desc: null,
    },
    "ServiceForm": {
        title: "Заявка на ремонт",
        subTitle: "Выбранная услуга:",
        desc: null,
    },
    "TradeInForm": {
        title: "Заявка на Trade-In",
        subTitle: null,
        desc: "Самый быстрый способ заменить свой старый iPhone на новый!",
    }
}

const Order  = () => {
    const {
            typeForm,
            service,
            device
        } = useSelector((state:AppState)=>state.order)
    const router = useRouter()
    const [dataOrder, setDataOrder] = useState<null|ServiceInfo>(null);


    useEffect(() => {
        if(!typeForm){
            router.push('/404').then()
        }
        switch (typeForm){
            case (TypeForm.Order):
                setDataOrder({
                    title: device?.title?device.title:'',
                    description: device?.desc?device.desc:'',
                    price: device?.price?device.price:'',
                    additionalInformation: 'Гарантия<br>1 год'
                })
        }
    }, []);

    return (
        <Layout title={''} description={''} keywords={''}>
            <section className={'container'}>
                <Form
                    title={typeForm?formDate[typeForm].title:''}
                    subTitle={typeForm?formDate[typeForm].subTitle:''}
                    desc={typeForm?formDate[typeForm].desc:''}
                    type={typeForm?typeForm:''}
                    data={dataOrder}/>
            </section>
        </Layout>
    );
};

export default Order ;
