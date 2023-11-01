import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import ListTemplate from "@/components/TemplatesPage/ListTemplate/ListTemplate";

const AboutUsPage = () => {
    return (
        <Layout
            description={'Профессиональный срочный ремонт техники Apple. Лучшее качество запчастей. Новая оригинальная техника Apple!'}
            title={'Стандарты компании Apple Fix в Сергиевом Посаде'}
            keywords={''}>
            <PageTamplate>
                <ListTemplate keyList={"about-us"}/>
            </PageTamplate>
        </Layout>
    );
};

export default AboutUsPage;
