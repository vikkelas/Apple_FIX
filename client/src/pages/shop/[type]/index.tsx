import React from 'react';
import Layout from "@/components/Layout/Layout";
import ModelsList from "@/components/Models/ModelsList/ModelsList";
import {NextPage} from "next";
import {ResponseDeviceColorI, ResponseTypesI} from "@/interface/ResponseInterface";
import SwiperTypes from "@/components/SwiperTypes/SwiperTypes";

export async function getServerSideProps(ctx: { params: { type: string; }; }){
    const {type} = ctx.params;
    try {
        const typeData = await fetch(`${process.env.APP_URL_BACKEND}/api/types/${type}`)
            .then(r=>r.json())
        const colorData = await fetch(`${process.env.APP_URL_BACKEND}/api/colors`)
            .then(r=>r.json())
        return {
            props: {
                typeData,
                colorData,
            }
        }
    }catch (e) {
        return {
            notFound: true
        }
    }
}

const Index:NextPage<{typeData:ResponseTypesI, colorData:ResponseDeviceColorI[] }> = ({typeData, colorData}) => {
    return (
        <Layout title={''} description={''} keywords={''}>
            <>
                <section className={'container'}>
                    <h1 className={'titleHevy'}>Новая оригинальная<br/>
                        <span>техника Apple в Сергиевом Посаде</span>
                    </h1>
                </section>
                <SwiperTypes/>
                {typeData.device_models?
                    <ModelsList
                        colors={colorData}
                        models={typeData.device_models}/>:null
                }
            </>
        </Layout>
    );
};

export default Index;
