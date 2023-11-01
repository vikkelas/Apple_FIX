import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import ContactsTemplate from "@/components/TemplatesPage/ContactsTemplate/ContactsTemplate";

const Contacts = () => {
    return (
        <Layout description={'Профессиональный ремонт техники Apple по доступным ценам. Находимся на Воробьевке, работаем ежедневно с 10:00 до 20:00.'} title={'Контакты — сервисный центр Apple Fix в Сергиевом Посаде'} keywords={''}>
            <PageTamplate>
                <ContactsTemplate/>
            </PageTamplate>
        </Layout>
    );
};

export default Contacts;
