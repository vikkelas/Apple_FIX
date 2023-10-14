import React from 'react';
import {ResponseDeviceColorI, ResponseTypeModelI} from "@/interface/ResponseInterface";
import {Swiper, SwiperSlide} from "swiper/react";
import {v4 as uuidv4} from 'uuid';
import ModelCard from "@/components/Models/ModelCard/ModelCard";
import style from './ModelList.module.sass';

const ModelsList:React.FC<{ models:ResponseTypeModelI[],colors:ResponseDeviceColorI[] }> = ({models, colors}) => {
    const modelsFilter = models.filter((item)=>{
        return item.devices.length!==0
    })
    return (
        <section className={style.listCard}>
            <Swiper
                spaceBetween={15}
                slidesPerView={1.15}
                className={style.listCardSwiper}>
                {modelsFilter.map(i=>{
                    return (
                        <SwiperSlide
                            className={style.listCardSwiperSwiperSlide}
                            key={uuidv4()}
                        >
                            <ModelCard
                                colors={colors}
                                model={i}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default ModelsList;
