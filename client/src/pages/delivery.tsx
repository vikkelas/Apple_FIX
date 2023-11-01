import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import TextBox from "@/components/TemplatesPage/TextBox/TextBox";

const Delivery = () => {
    return (
        <Layout
            description={'Быстрая доставка новой оригинальной техники Apple в Сергиев Посад. Почти всегда доставка занимает всего 1 день!'}
            title={'Условия по доставке в Apple Fix — Сергиев Посад'}
            keywords={''}>
            <PageTamplate>
                <TextBox keyData={"delivery"}/>
            </PageTamplate>
        </Layout>
    );
};

export default Delivery;
