import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import CashbackTemplate from "@/components/TemplatesPage/CashbackTemplate/CashbackTemplate";

const Cashback = () => {
    return (
        <Layout
            description={'Кэшбэк, которым можно оплачивать до 50% стоимости покупки! Оформите накопительную карту и получайте кэшбэк до 10% со следующей покупки!'}
            title={'Кэшбэк с каждой покупки и ремонта в Apple Fix'}
            keywords={''}>
            <PageTamplate>
                <CashbackTemplate/>
            </PageTamplate>
        </Layout>
    );
};

export default Cashback;
