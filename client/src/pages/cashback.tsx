import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import CashbackTemplate from "@/components/TemplatesPage/CashbackTemplate/CashbackTemplate";

const Cashback = () => {
    return (
        <Layout description={''} title={''} keywords={''}>
            <PageTamplate>
                <CashbackTemplate/>
            </PageTamplate>
        </Layout>
    );
};

export default Cashback;
