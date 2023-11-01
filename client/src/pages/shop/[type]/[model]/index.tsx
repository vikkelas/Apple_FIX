import React from 'react';
import {NextPage} from "next";
import {ResponseDeviceColorI, ResponseTypeModelI} from "@/interface/ResponseInterface";
import Layout from "@/components/Layout/Layout";
import DeviceCard from "@/components/DeviceCard/DeviceCard";

export const getServerSideProps = (async (ctx)=>{
    const {model} = ctx.params;
    try {
        const modelItem = await fetch(`${process.env.APP_URL_BACKEND}/api/models/${model}`)
            .then(r=>r.json());
        const colorData = await fetch(`${process.env.APP_URL_BACKEND}/api/colors`)
            .then(r=>r.json())
        if(!modelItem&&!colorData){
            return {
                notFound: true
            }
        }
        return { props: { modelItem, colorData } }
    }catch (e){
        return {
            notFound: true
        }
    }
});

const Index:NextPage<{modelItem:ResponseTypeModelI, colorData:ResponseDeviceColorI[]}> = ({modelItem, colorData}) => {
    let minPrice = 1000000
    modelItem.devices.forEach(item=>{
        if(item.price<minPrice){
            minPrice=item.price
        }
    })
    return (
        <Layout
            description={`Лучшая цена — от ${minPrice}! Быстрая доставка, честная гарантия. Только новая орининальная продукция. Оплатить ${modelItem.title} можно любым способом!`}
            keywords={''}
            title={`Купить ${modelItem.title} в Сергиевом Посаде`}>
            <DeviceCard
                modelDevice={modelItem}
                colorData={colorData}
            />
        </Layout>
    );
};

export default Index;
