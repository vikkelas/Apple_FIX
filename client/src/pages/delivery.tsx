import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import TextBox from "@/components/TemplatesPage/TextBox/TextBox";

const Delivery = () => {
    return (
        <Layout description={''} title={''} keywords={''}>
            <PageTamplate>
                <TextBox keyData={"delivery"}/>
            </PageTamplate>
        </Layout>
    );
};

export default Delivery;
