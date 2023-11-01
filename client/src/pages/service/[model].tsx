import React from 'react';
import Layout from "@/components/Layout/Layout";
import {NextPage} from "next";
import {ResponseTypeModelI} from "@/interface/ResponseInterface";
import Services from "@/components/Services/Services";

export async function getServerSideProps(ctx) {
    const {model} = ctx.params;
    try{
        const model_device = await fetch(`${process.env.APP_URL_BACKEND}/api/models/${model}`)
            .then(r=>r.json())
        return { props: { model_device} }
    }catch(err){
        console.log(err)
        return {
            notFound: true
        }
    }
}
const Model:NextPage<{model_device:ResponseTypeModelI}> = ({model_device}) => {

    return (
        <Layout
            title={`Ремонт и обслуживание ${model_device.title} в Apple Fix — Сергиев Посад`}
            description={`У Вас ${model_device.title}? Отремонтируем уже сегодня! Большая и честная гарантия. Все запчасти в наличии. Мы специализируемся только на технике Apple!`}
            keywords={''}>
            <div className={'container'}>
                <Services model_device={model_device}/>
            </div>
        </Layout>
    );
};
export default Model;
