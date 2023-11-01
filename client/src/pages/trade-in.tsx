import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import ListTemplate from "@/components/TemplatesPage/ListTemplate/ListTemplate";

const TradeIn = () => {
    return (
        <Layout
            description={'Самый выгодный и честный Trade-In в Сергиевом Посаде. Можно обменять старый iPhone 11 на новый iPhone 15 или разбитый iPhone на целый!'}
            title={'Trade-In в Apple Fix — обменяем твой старый iPhone на новый'}
            keywords={''}>
            <PageTamplate>
                <ListTemplate keyList={"trade-in"}/>
            </PageTamplate>
        </Layout>
    );
};

export default TradeIn;
