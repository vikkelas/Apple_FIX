import React from 'react';
import {ResponseTypesI} from "@/interface/ResponseInterface";
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import style from './SwiperTypeItem.module.sass'
import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";

const SwiperTypeItem:React.FC<{type:ResponseTypesI}> = ({type}) => {
    const router = useRouter();
    const typeSlug = router.query.type;
    return (
        <Link
            href={`/shop/${type.slug}`}
            className={clsx([style.item, typeSlug===type.slug&&'active_menu'])}>
            <div>
                <IconSVG height={24} width={24} imageId={SvgList[type.icon_name]}/>
            </div>
            <p>{type.title}</p>
        </Link>
    );
};

export default SwiperTypeItem;
