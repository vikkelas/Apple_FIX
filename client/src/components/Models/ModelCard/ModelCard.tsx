import React, {useEffect, useState} from 'react';
import {ResponseDeviceColorI, ResponseTypeModelI} from "../../../../interface/ResponseInterface";
import filterOptions from "@/helpers/filterOptions";
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import {useRouter} from "next/router";
import Image from "next/image";
import {getNamePhoto, respColors} from "@/helpers/helpFunction";
import style from './ModelCard.module.sass';
import ColorPin from "@/components/Assets/ColorPin";
import {v4 as uuidv4} from 'uuid';
import Link from "next/link";
export type StateDevice = {
    color: number[]|[];
    memory: string[]|[];
    loop: string[]|[];
    connection: string[]|[];
    country: string[]|[];
    price: null|number;
}

const ModelCard:React.FC<{model:ResponseTypeModelI, colors:ResponseDeviceColorI[]}> = ({model, colors}) => {
    const router = useRouter()
    const type = router.query.type;

    const {devices, title} = model
    const [namePhoto, setNamePhoto] = useState('')
    const [stateCard, setStateCard] = useState<StateDevice>({
        color: [],
        memory: [],
        loop: [],
        connection: [],
        country: [],
        price: null
    })
    const changeState = (name, value)=>{
        setStateCard((prevState)=>({...prevState, [name]: value}))
    }

    useEffect(() => {
        filterOptions(devices, setStateCard)
    }, []);


    //
    useEffect(() => {
        if(stateCard.color.length){
            const getInfoColor = respColors(colors, stateCard.color[0])
            console.log(getNamePhoto(title, getInfoColor.name))
            setNamePhoto(getNamePhoto(title, getInfoColor.name))
        }
    }, [stateCard.color]);



    return (
        <article className={style.card}>
            <div className={style.cardHeader}>
                <h2 className={style.cardHeaderTitle}>{title}</h2>
                <IconSVG width={20} height={20} imageId={SvgList.info}/>
            </div>
            <div className={style.cardMain}>
                <div className={style.cardMainImage}>
                    {namePhoto!==''?<Image
                        src={`/images/${type}/${namePhoto}`}
                        alt={'device'}
                        fill
                        sizes={'50vw'}
                    />:null}
                </div>
                <div className={style.cardMainColors}>
                    <span>Цвета:</span>
                    <ul className={style.cardMainColorsList}>
                        {stateCard.color.length&&stateCard.color.map((item, index)=>{
                            const colorPin = colors.findIndex(i=>i.id===item)
                            if(colorPin!==-1){
                                return (
                                    <li key={uuidv4()}>
                                        <ColorPin
                                            firstColor={colors[colorPin].first_color}
                                            secondColor={colors[colorPin].second_color}
                                            keyId={uuidv4()}
                                        />
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
                <div className={style.cardFooter}>
                    {stateCard.memory.length?<div className={style.cardFooterMemory}>
                        <span>Память:</span>
                        <ul className={style.cardFooterMemoryList}>
                            {stateCard.memory.map(size=>{
                                return (
                                    <li key={uuidv4()}>{+size>100?`${size}Гб`:`${size}Тб`}</li>
                                )
                            })}
                        </ul>
                    </div>:null}
                    {stateCard.connection.length?<div className={style.cardFooterMemory}>
                        <span>Связь:</span>
                        <ul className={style.cardFooterMemoryList}>
                            {stateCard.connection.map(item=>{
                                return (
                                    <li key={uuidv4()}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>:null}
                    <div className={style.cardFooterPriceBox}>
                        <span>от {stateCard.price}₽</span>
                        <Link className={style.cardFooterPriceBoxBtn} href={`/shop/${type}/${model.slug}`}>Выбрать</Link>
                    </div>
                </div>
            </div>

        </article>
    );
};

export default ModelCard;
