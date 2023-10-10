import React from 'react';
import {NextPage} from "next";
import {ResponseDeviceColorI, ResponseTypeModelI} from "../../../../../interface/ResponseInterface";
import Layout from "@/components/Layout/Layout";
import DeviceCard from "@/components/DeviceCard/DeviceCard";

export const getServerSideProps = (async (ctx)=>{
    const {model} = ctx.params;
    try {
        const modelItem = await fetch(`${process.env.APP_URL_BACKEND}/api/models/${model}`)
            .then(r=>r.json());
        const colorData = await fetch(`${process.env.APP_URL_BACKEND}/api/colors`)
            .then(r=>r.json())
        if(!modelItem&&!colorData){
            return {
                notFound: true
            }
        }
        return { props: { modelItem, colorData } }
    }catch (e){
        return {
            notFound: true
        }
    }
});

const Index:NextPage<{modelItem:ResponseTypeModelI, colorData:ResponseDeviceColorI[]}> = ({modelItem, colorData}) => {
    return (
        <Layout description={''} keywords={''} title={''}>
            <DeviceCard
                modelDevice={modelItem}
                colorData={colorData}
            />
        </Layout>
    );
};

export default Index;
