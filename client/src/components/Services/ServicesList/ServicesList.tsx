import React from 'react';
import style from './ServiceList.module.sass';
import {ResponseServicesI} from "@/interface/ResponseInterface";
import {v4 as uuidv4} from 'uuid';
import ServicesItem from "@/components/Services/ServicesItem/ServicesItem";
import {AnimatePresence, motion} from "framer-motion";

const ServicesList:React.FC<{
    serviceList: ResponseServicesI[];
    fullList: boolean;
    hitsCount: number;
    modelName: string;
}> = ({serviceList, fullList, hitsCount, modelName}) => {
    return (
        <div className={style.serviceList}>
            <AnimatePresence>
                {!fullList&&<motion.h3
                    initial={{opacity:0, x: -50}}
                    animate={{opacity:1, x: 0}}
                    exit={{opacity:0, x: -50}}
                >Популярные услуги</motion.h3>}
            </AnimatePresence>
            <ul>
                {serviceList.map((i, index)=> {
                    if(!fullList&&index+1>hitsCount){
                        return
                    }
                    return(
                        <ServicesItem
                            item={i}
                            key={uuidv4()}
                            modelName={modelName}
                        />
                    )
                })}
            </ul>
        </div>

    );
};

export default ServicesList;
