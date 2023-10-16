import Layout from "@/components/Layout/Layout";
import style from '@/styles/Home.module.sass';
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import {useRouter} from "next/router";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import clsx from "clsx";

const Home = () => {
    const router = useRouter();
    const [location, setLocation] = useState({
        latitude: '',
        longitude: ''
    })
    useEffect(()=> {
        if (navigator.geolocation) {
            navigator.permissions
                .query({name: "geolocation"})
                .then((result)=>{
                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition((position)=>{
                            setLocation({
                                latitude:  position.coords.latitude.toString(),
                                longitude: position.coords.longitude.toString()
                            })
                        })
                    }else if (result.state === "prompt") {
                        console.log(result.state);
                    } else if (result.state === "denied") {
                        //If denied then you have to show instructions to enable location
                    }
                })
        }

    }, [])
    return (
        <Layout description={''} title={''} keywords={''}>
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
                       <div className={style.mainListLink}>
                           <Link
                                href={"https://t.me/applefix_sp"}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                   <g clipPath="url(#clip0_452_3551)">
                                       <path d="M0 20.125C0 10.6386 0 5.894 2.947 2.947C5.894 0 10.64 0 20.125 0H21.875C31.3614 0 36.106 0 39.053 2.947C42 5.894 42 10.64 42 20.125V21.875C42 31.3614 42 36.106 39.053 39.053C36.106 42 31.36 42 21.875 42H20.125C10.6386 42 5.894 42 2.947 39.053C0 36.106 0 31.36 0 21.875V20.125Z" fill="#29A9EA"/>
                                       <path fillRule="evenodd" clipRule="evenodd" d="M9.64987 19.5623C16.0923 16.7554 20.3883 14.905 22.5378 14.0109C28.675 11.4582 29.9503 11.0148 30.7815 11.0002C30.9643 10.9969 31.3731 11.0422 31.6379 11.2571C31.8614 11.4385 31.9229 11.6836 31.9524 11.8556C31.9818 12.0276 32.0185 12.4194 31.9893 12.7256C31.6568 16.22 30.2177 24.7001 29.4856 28.6139C29.1758 30.27 28.5658 30.8253 27.9753 30.8796C26.6919 30.9977 25.7174 30.0315 24.4744 29.2167C22.5294 27.9417 21.4305 27.148 19.5425 25.9038C17.3606 24.466 18.7751 23.6757 20.0185 22.3842C20.344 22.0462 25.9985 16.903 26.1079 16.4365C26.1216 16.3781 26.1343 16.1606 26.0051 16.0458C25.8759 15.9309 25.6851 15.9702 25.5475 16.0014C25.3524 16.0457 22.2452 18.0995 16.2258 22.1627C15.3439 22.7683 14.545 23.0634 13.8292 23.0479C13.0402 23.0309 11.5223 22.6018 10.394 22.235C9.00999 21.7851 7.91003 21.5473 8.00581 20.7832C8.0557 20.3853 8.60372 19.9783 9.64987 19.5623Z" fill="white"/>
                                   </g>
                                   <defs>
                                       <clipPath id="clip0_452_3551">
                                           <rect width="42" height="42" fill="white"/>
                                       </clipPath>
                                   </defs>
                               </svg>
                            </Link>
                           <Link
                               href={"https://vk.com/applesp"}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                   <g clipPath="url(#clip0_452_3554)">
                                       <path d="M0 20.125C0 10.6386 0 5.894 2.947 2.947C5.894 0 10.64 0 20.125 0H21.875C31.3614 0 36.106 0 39.053 2.947C42 5.894 42 10.64 42 20.125V21.875C42 31.3614 42 36.106 39.053 39.053C36.106 42 31.36 42 21.875 42H20.125C10.6386 42 5.894 42 2.947 39.053C0 36.106 0 31.36 0 21.875V20.125Z" fill="#4891FF"/>
                                       <path fillRule="evenodd" clipRule="evenodd" d="M12.5253 14H9.90023C9.15004 14 9 14.3529 9 14.743C9 15.438 9.88943 18.8876 13.1447 23.4488C15.3136 26.5648 18.3708 28.2536 21.1519 28.2536C22.8215 28.2536 23.028 27.8779 23.028 27.2334V24.8784C23.028 24.1282 23.1864 23.9781 23.7145 23.9781C24.1046 23.9781 24.7708 24.1726 26.33 25.6742C28.1101 27.4554 28.4029 28.2536 29.404 28.2536H32.0303C32.7804 28.2536 33.1561 27.8779 32.9389 27.1373C32.7024 26.4004 31.8526 25.3297 30.7243 24.061C30.1122 23.3384 29.1951 22.5594 28.9167 22.1693C28.5266 21.6687 28.6382 21.4467 28.9167 21.0014C28.9167 21.0014 32.1155 16.4954 32.4492 14.965C32.6172 14.4093 32.4492 14 31.6546 14H29.0295C28.3621 14 28.0536 14.3529 27.8868 14.743C27.8868 14.743 26.5521 17.997 24.6604 20.1108C24.0482 20.7229 23.7698 20.9186 23.4361 20.9186C23.2692 20.9186 23.028 20.7229 23.028 20.1672V14.965C23.028 14.2977 22.8347 14 22.2778 14H18.1511C17.7346 14 17.4838 14.3097 17.4838 14.6038C17.4838 15.2363 18.4296 15.3828 18.5268 17.1628V21.029C18.5268 21.8776 18.3744 22.0312 18.0395 22.0312C17.1501 22.0312 14.9847 18.7616 13.7004 15.0215C13.4483 14.2941 13.1963 14 12.5253 14Z" fill="white"/>
                                   </g>
                                   <defs>
                                       <clipPath id="clip0_452_3554">
                                           <rect width="42" height="42" fill="white"/>
                                       </clipPath>
                                   </defs>
                               </svg>
                           </Link>
                           <Link
                               href={"https://instagram.com/applefix.pro"}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                   <g clipPath="url(#clip0_452_3557)">
                                       <path d="M0 20.125C0 10.6386 0 5.894 2.947 2.947C5.894 0 10.64 0 20.125 0H21.875C31.3614 0 36.106 0 39.053 2.947C42 5.894 42 10.64 42 20.125V21.875C42 31.3614 42 36.106 39.053 39.053C36.106 42 31.36 42 21.875 42H20.125C10.6386 42 5.894 42 2.947 39.053C0 36.106 0 31.36 0 21.875V20.125Z" fill="url(#paint0_linear_452_3557)"/>
                                       <path d="M0 20.125C0 10.6386 0 5.894 2.947 2.947C5.894 0 10.64 0 20.125 0H21.875C31.3614 0 36.106 0 39.053 2.947C42 5.894 42 10.64 42 20.125V21.875C42 31.3614 42 36.106 39.053 39.053C36.106 42 31.36 42 21.875 42H20.125C10.6386 42 5.894 42 2.947 39.053C0 36.106 0 31.36 0 21.875V20.125Z" fill="url(#paint1_linear_452_3557)" fillOpacity="0.1"/>
                                       <path d="M21.0587 10.5427C15.2293 10.5427 10.5 15.2721 10.5 21.1014C10.5 26.9308 15.2293 31.6602 21.0587 31.6602C26.8881 31.6602 31.6174 26.9308 31.6174 21.1014C31.6174 15.2721 26.8881 10.5427 21.0587 10.5427ZM21.0587 27.9506C17.2768 27.9506 14.2096 24.8833 14.2096 21.1014C14.2096 17.3196 17.2768 14.2523 21.0587 14.2523C24.8406 14.2523 27.9078 17.3196 27.9078 21.1014C27.9078 24.8833 24.8406 27.9506 21.0587 27.9506Z" fill="white"/>
                                       <path d="M34.5004 10.1251C34.5004 11.4901 33.3923 12.5901 32.0354 12.5901C30.6703 12.5901 29.5703 11.4821 29.5703 10.1251C29.5703 8.76007 30.6784 7.66003 32.0354 7.66003C33.3923 7.66003 34.5004 8.7681 34.5004 10.1251Z" fill="white"/>
                                   </g>
                                   <defs>
                                       <linearGradient id="paint0_linear_452_3557" x1="-3.85648e-07" y1="44.6337" x2="42.0072" y2="-0.0163818" gradientUnits="userSpaceOnUse">
                                           <stop offset="0.121492" stopColor="#FF9900"/>
                                           <stop offset="0.91373" stopColor="#FF008A"/>
                                       </linearGradient>
                                       <linearGradient id="paint1_linear_452_3557" x1="0" y1="0" x2="42.0082" y2="42.0246" gradientUnits="userSpaceOnUse">
                                           <stop stopColor="#8000FF"/>
                                           <stop offset="1" stopColor="#FF0000"/>
                                       </linearGradient>
                                       <clipPath id="clip0_452_3557">
                                           <rect width="42" height="42" fill="white"/>
                                       </clipPath>
                                   </defs>
                               </svg>
                           </Link>
                           <Link
                               href={"https://wa.me/79251656555"}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                   <g clipPath="url(#clip0_452_3562)">
                                       <path d="M0 20.125C0 10.6386 0 5.894 2.947 2.947C5.894 0 10.64 0 20.125 0H21.875C31.3614 0 36.106 0 39.053 2.947C42 5.894 42 10.64 42 20.125V21.875C42 31.3614 42 36.106 39.053 39.053C36.106 42 31.36 42 21.875 42H20.125C10.6386 42 5.894 42 2.947 39.053C0 36.106 0 31.36 0 21.875V20.125Z" fill="url(#paint0_linear_452_3562)"/>
                                       <path fillRule="evenodd" clipRule="evenodd" d="M30.4 11.45C28.15 9.2 25.15 8 22 8C15.4 8 10 13.4 10 20C10 22.1 10.6 24.2 11.65 26L10 32L16.3 30.35C18.1 31.25 20.05 31.85 22 31.85C28.6 31.85 34 26.45 34 19.85C34 16.7 32.65 13.7 30.4 11.45ZM22 29.9C20.2 29.9 18.4 29.45 16.9 28.55L16.6 28.4L12.85 29.45L13.9 25.85L13.6 25.4C12.55 23.75 12.1 21.95 12.1 20.15C12.1 14.75 16.6 10.25 22 10.25C24.7 10.25 27.1 11.3 29.05 13.1C31 15.05 31.9 17.45 31.9 20.15C31.9 25.4 27.55 29.9 22 29.9ZM27.4 22.4C27.1 22.25 25.6 21.5 25.3 21.5C25 21.35 24.85 21.35 24.7 21.65C24.55 21.95 23.95 22.55 23.8 22.85C23.65 23 23.5 23 23.2 23C22.9 22.85 22 22.55 20.8 21.5C19.9 20.75 19.3 19.7 19.15 19.4C19 19.1 19.15 18.95 19.3 18.8C19.45 18.65 19.6 18.5 19.75 18.35C19.9 18.2 19.9 18.05 20.05 17.9C20.2 17.75 20.05 17.6 20.05 17.45C20.05 17.3 19.45 15.8 19.15 15.2C19 14.75 18.7 14.75 18.55 14.75C18.4 14.75 18.25 14.75 17.95 14.75C17.8 14.75 17.5 14.75 17.2 15.05C16.9 15.35 16.15 16.1 16.15 17.6C16.15 19.1 17.2 20.45 17.35 20.75C17.5 20.9 19.45 24.05 22.45 25.25C25 26.3 25.45 26 26.05 26C26.65 26 27.85 25.25 28 24.65C28.3 23.9 28.3 23.3 28.15 23.3C28 22.55 27.7 22.55 27.4 22.4Z" fill="white"/>
                                   </g>
                                   <defs>
                                       <linearGradient id="paint0_linear_452_3562" x1="21" y1="0" x2="21" y2="42" gradientUnits="userSpaceOnUse">
                                           <stop stopColor="#60F379"/>
                                           <stop offset="1" stopColor="#0CBE26"/>
                                       </linearGradient>
                                       <clipPath id="clip0_452_3562">
                                           <rect width="42" height="42" fill="white"/>
                                       </clipPath>
                                   </defs>
                               </svg>
                           </Link>
                           <Link
                               href={"tel:79251656555"}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                   <g clipPath="url(#clip0_452_3565)">
                                       <path d="M0 20.125C0 10.6386 0 5.894 2.947 2.947C5.894 0 10.64 0 20.125 0H21.875C31.3614 0 36.106 0 39.053 2.947C42 5.894 42 10.64 42 20.125V21.875C42 31.3614 42 36.106 39.053 39.053C36.106 42 31.36 42 21.875 42H20.125C10.6386 42 5.894 42 2.947 39.053C0 36.106 0 31.36 0 21.875V20.125Z" fill="url(#paint0_linear_452_3565)"/>
                                       <path d="M25.3464 24.3298L24.7898 24.8833C24.7898 24.8833 23.4666 26.1989 19.8549 22.6077C16.2433 19.0166 17.5664 17.7009 17.5664 17.7009L17.917 17.3524C18.7805 16.4937 18.8619 15.1151 18.1085 14.1087L16.5673 12.05C15.6348 10.8043 13.8328 10.6398 12.764 11.7026L10.8456 13.6101C10.3156 14.137 9.96046 14.8202 10.0035 15.578C10.1137 17.5167 10.9909 21.6879 15.8854 26.5547C21.0759 31.7157 25.9461 31.9208 27.9377 31.7352C28.5676 31.6765 29.1155 31.3556 29.5569 30.9167L31.2932 29.1903C32.4651 28.025 32.1347 26.0271 30.6352 25.212L28.3001 23.9426C27.3155 23.4074 26.1159 23.5646 25.3464 24.3298Z" fill="white"/>
                                   </g>
                                   <defs>
                                       <linearGradient id="paint0_linear_452_3565" x1="21" y1="0" x2="21" y2="42" gradientUnits="userSpaceOnUse">
                                           <stop stopColor="#60F379"/>
                                           <stop offset="1" stopColor="#0CBE26"/>
                                       </linearGradient>
                                       <clipPath id="clip0_452_3565">
                                           <rect width="42" height="42" fill="white"/>
                                       </clipPath>
                                   </defs>
                               </svg>
                           </Link>
                       </div>
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
                               href={`https://yandex.ru/maps/?rtext=${location.latitude!==''&&location.longitude!==''?`${location.latitude},${location.longitude}`:''}~56.297453, 38.129037`}
                               className={style.routeHeaderLink}
                           >
                               <span>Построить маршрут</span>
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
