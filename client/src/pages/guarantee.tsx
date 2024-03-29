import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import TextBox from "@/components/TemplatesPage/TextBox/TextBox";

const Guarantee = () => {
    return (
        <Layout
            description={'Честная и длительная гарантия на услуги и товары в сервисном центре Apple Fix.'}
            title={'Гарантийные условия в Apple Fix — Сергиев Посад'}
            keywords={''}>
            <PageTamplate>
                <TextBox keyData={"guarantee"}/>
            </PageTamplate>
        </Layout>
    );
};

export default Guarantee;
