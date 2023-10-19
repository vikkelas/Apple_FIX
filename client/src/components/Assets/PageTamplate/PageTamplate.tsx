import React, {ReactElement} from 'react';
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import style from './TamplatePage.module.sass';
import {useDispatch} from "react-redux";
import {changeState} from "@/redux/reducers/orderSlice";
import {useRouter} from "next/router";
import {TemplatePageData} from "@/data/TemplatePageData";

const PageTamplate:React.FC<{ children: ReactElement; }> = ({children}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const pageName = router.asPath.split('/')[1]
    const dataInfo = TemplatePageData[pageName]
    const {title, subtitle, description, icon,  linkTitle, typeForm, } = dataInfo;
    const handleGoForm = () => {
        if (typeForm) {
            dispatch(changeState([{name: "typeForm", value: typeForm}]))
            router.push('/order').then()
        }
    }

    return (
        <section className={'container'}>
            <div className={style.template}>
                <div className={style.templateHeader}>
                    <IconSVG width={48} height={48} imageId={SvgList[icon]}/>
                    <div className={style.templateHeaderTitle}>
                        <h1>{title}</h1>
                        <span>{subtitle}</span>
                    </div>
                </div>
                <p className={style.templateDescription}>
                    <span dangerouslySetInnerHTML={{ __html: description}}/>
                </p>
                {children}
                {typeForm&&linkTitle?
                    <div
                        onClick={handleGoForm}
                        className={style.templateFooter}>
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
