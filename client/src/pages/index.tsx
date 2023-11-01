import Layout from "@/components/Layout/Layout";
import style from '@/styles/Home.module.sass';
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import SocialMedia from "@/components/Assets/SocialMedia/SocialMedia";

const Home = () => {
    return (
        <Layout>
               <div className={ clsx(['container', style.container])}>
                   <section className={style.tradeIn}>
                       <div className={style.tradeInBox}>
                           <div className={style.tradeInBoxHeader}>
                               <h2>Trade-In</h2>
                               <p>Быстрый обмен старого iPhone на новый</p>
                           </div>
                           <Link
                               href={'/trade-in'}
                               className={style.tradeInBoxFooter}>
                               <span>
                                   Узнать больше
                               </span>
                               <div className={style.tradeInBoxFooterIco}>
                                   <IconSVG height={16} width={16} imageId={SvgList.arrowLeft}/>
                               </div>
                           </Link>
                       </div>

                   </section>
                   <section className={style.main}>
                       <div className={style.mainHeader}>
                           <h1>Apple Fix</h1>
                           <p>Сервисный центр и магазин Apple</p>
                       </div>
                       <SocialMedia/>
                   </section>
                   <section className={style.route}>
                       <IconSVG height={32} width={32} imageId={SvgList.route}/>
                       <div className={style.routeHeader}>
                           <div className={style.routeHeaderBox}>
                                <h2>Сергиев Посад</h2>
                               <span>пр-т Красной Армии, д. 12</span>
                           </div>
                           <Link
                               target="_blank"
                               rel="noopener noreferrer"
                               href={`https://yandex.ru/maps/org/apple_fix/1279673815/`}
                               className={style.routeHeaderLink}
                           >
                               <span>Показать на карте</span>
                               <div className={style.tradeInBoxFooterIco}>
                                   <IconSVG height={16} width={16} imageId={SvgList.arrowLeft}/>
                               </div>
                           </Link>
                       </div>
                   </section>
               </div>
        </Layout>
    )
}
export default Home;
