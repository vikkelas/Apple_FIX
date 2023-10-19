import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import TextList from "@/components/TemplatesPage/TextList/TextList";

const Pay = () => {
    return (
        <Layout description={''} title={''} keywords={''}>
            <PageTamplate>
                <TextList kelList={"pay"}/>
            </PageTamplate>
        </Layout>
    );
};

export default Pay;
