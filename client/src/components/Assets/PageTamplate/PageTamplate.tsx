import React from 'react';
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import style from './TamplatePage.module.sass';
import {PageTamplateI} from "@/interface/PageTamplateInterface";

const PageTamplate:React.FC<PageTamplateI> = ({dataInfo, children}) => {
    const {title, subtitle, description, link, linkTitle} = dataInfo;
    return (
        <section className={'container'}>
            <div className={style.template}>
                <div className={style.templateHeader}>
                    <IconSVG width={48} height={48} imageId={SvgList.tradeIn}/>
                    <div className={style.templateHeaderTitle}>
                        <h1>{title}</h1>
                        <span>{subtitle}</span>
                    </div>
                </div>
                <p className={style.templateDescription}>{description}</p>
                {children}
                {link?
                    <div className={style.templateFooter}>
                        <span>{linkTitle}</span>
                        <div className={style.templateFooterIco}>
                            <IconSVG width={16} height={16} imageId={SvgList.arrowLeft}/>
                        </div>
                    </div>:
                    null
                }
            </div>
        </section>
    );
};

export default PageTamplate;
