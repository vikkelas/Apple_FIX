import React from 'react';
import Image from "next/image";
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import Link from "next/link";
import style from './ReviewBox.module.sass';

export type reviews = {
    link:string, title: string, icon: string
}

const ReviewBox:React.FC<reviews> = ({link, title, icon}) => {
    return (
        <div className={style.box}>
            <div className={style.boxIcon}>
                <Image
                    src={`/icons/${icon}`}
                    width={42}
                    height={42}
                    alt={icon}
                    quality={100}
                />
            </div>
            <div className={style.boxText}>
                <div className={style.boxTextInfo}>
                    <h2>{title}</h2>
                    <p>Более 100 отзызов</p>
                </div>
                <Link
                    className={style.boxTextLink}
                    href={link}>
                    Читать отзывы <IconSVG imageId={SvgList.arrowLeft} width={16} height={16}/>
                </Link>
            </div>

        </div>
    );
};

export default ReviewBox;
