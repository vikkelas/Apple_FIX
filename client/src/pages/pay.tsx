import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import TextList from "@/components/TemplatesPage/TextList/TextList";

const Pay = () => {
    return (
        <Layout
            description={'Мы постарались создать максимум удобства при оплате любых услуг и товаров в сервисном центре Apple Fix.'}
            title={'Условия оплаты в Apple Fix — Сергиев Посад'}
            keywords={''}>
            <PageTamplate>
                <TextList kelList={"pay"}/>
            </PageTamplate>
        </Layout>
    );
};

export default Pay;
