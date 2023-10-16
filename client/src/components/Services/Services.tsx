import React, {useState} from 'react';
import ServicesList from "@/components/Services/ServicesList/ServicesList";
import {ResponseTypeModelI} from "@/interface/ResponseInterface";
import style from './Services.module.sass'
import ServiceHeader from "@/components/Services/ServiceHeader/ServiceHeader";
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import {motion} from 'framer-motion';

const Services:React.FC<{ model_device: ResponseTypeModelI }> = ({model_device}) => {
    const {title, device_services} = model_device;
    const [fullList, setFullList] = useState(false);
    const hitsCount = device_services.filter(item => item.hits).length;

    const handleFuleListState = () => {
        setFullList(!fullList)
    }
    return (
        <section className={style.services}>
            <ServiceHeader
                title={title}
                fullList={fullList}
            />
            <ServicesList
                serviceList={device_services}
                hitsCount={hitsCount}
                fullList={fullList}
                modelName={title}
            />
            <div
                onClick={handleFuleListState}
                className={style.servicesFooter}>
                <span>{!fullList?'Показать остальные услуги':'Скрыть'}</span>
                <motion.div
                    animate={fullList?{rotateX: 180}:{rotateX: 0}}
                    className={style.servicesFooterIco}>
                    <IconSVG width={16} height={16} imageId={SvgList.arrow_blue}/>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
