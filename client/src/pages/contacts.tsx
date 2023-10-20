import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import ContactsTemplate from "@/components/TemplatesPage/ContactsTemplate/ContactsTemplate";

const Contacts = () => {
    return (
        <Layout description={''} title={''} keywords={''}>
            <PageTamplate>
                <ContactsTemplate/>
            </PageTamplate>
        </Layout>
    );
};

export default Contacts;
