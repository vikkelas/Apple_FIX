import React from 'react';
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import style from './Horizontal.module.sass';

const Horizontal = () => {
    return (
        <div className={style.horizontal}>
            <IconSVG height={100} width={100} imageId={SvgList.horizontal}/>
            <div className={style.horizontalText}>
                <h1>Поверните устройство</h1>
                <span>Сайт доступен только в вертикальной ориентации</span>
            </div>
        </div>
    );
};

export default Horizontal;
