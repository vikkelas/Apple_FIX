import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import ListTemplate from "@/components/TemplatesPage/ListTemplate/ListTemplate";

const TradeIn = () => {
    return (
        <Layout description={''} title={''} keywords={''}>
            <PageTamplate>
                <ListTemplate keyList={"trade-in"}/>
            </PageTamplate>
        </Layout>
    );
};

export default TradeIn;
