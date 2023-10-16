import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import {InfoI} from "@/interface/PageTamplateInterface";
import TradeInTemplate from "@/components/TemplatesPage/TradeIn/TradeInTemplate";

const TradeIn = () => {
    const pageProps:InfoI = {
        title: "Trade-In iPhone",
        subtitle: "в Сергиевом Посаде",
        description: "Самый быстрый способ заменить свой старый iPhone на новый!",
        link: '/order',
        linkTitle: 'Оставить заявку'
    }
    return (
        <Layout description={''} title={''} keywords={''}>
            <PageTamplate
                dataInfo={pageProps}
            >
                <TradeInTemplate/>
            </PageTamplate>
        </Layout>
    );
};

export default TradeIn;
