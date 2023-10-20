import React, {useEffect, useRef, useState} from 'react';
import {ResponseTypesI} from "@/interface/ResponseInterface";

import {Swiper, SwiperSlide} from 'swiper/react';
import {v4 as uuidv4} from 'uuid';
import {useRouter} from "next/router";
import SwiperTypeItem from "@/components/SwiperTypes/SwiperTypeItem/SwiperTypeItem";
import style from './SwiperTypes.module.sass';

const SwiperTypes = () => {
    const swiperRef = useRef<any>(null)
    const router = useRouter();
    const [typesList, setTypesList] = useState<null|ResponseTypesI[]>(null);
    const [aciveIndex, setActiveIndex] = useState<null|number>(null);
    const getTypes = async () => {
        try {
            fetch(`${process.env.APP_URL_BACKEND}/api/types/all`)
                .then(r=>r.json())
                .then(res=>setTypesList(res))
        }catch (err){
            console.log('error server')
        }
    }

    useEffect(() => {
        if(typesList&&router.query.type){
            const index = typesList.findIndex(item=>{
                 return router.query.type===item.slug;
            })
            if(index!==-1)setActiveIndex(index);
        }
    }, [router, typesList]);

    useEffect(() => {
        if(swiperRef.current){
            swiperRef.current.swiper.slideTo(aciveIndex)
        }
    }, [aciveIndex]);

    useEffect(() => {
        getTypes().then()
    }, []);

    return (
        <section className={style.container}>
            {typesList&&aciveIndex!==null?
                <Swiper
                    ref={swiperRef}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    className={style.containerSwiper}
                    initialSlide={aciveIndex}
                >
                {typesList.map((item)=>{
                    return (
                        <SwiperSlide
                            className={style.containerSwiperSlide}
                            key={uuidv4()}
                        >
                            <SwiperTypeItem type={item}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>:null}
        </section>
    );
};

export default SwiperTypes;
