import React, {useEffect, useState} from 'react';
import {ResponseDeviceColorI, ResponseTypeModelI} from "@/interface/ResponseInterface";
import filterOptions from "@/helpers/filterOptions";
import {useRouter} from "next/router";
import Image from "next/image";
import {getNamePhoto, respColors} from "@/helpers/helpFunction";
import style from './ModelCard.module.sass';
import ColorPin from "@/components/Assets/ColorPin";
import {v4 as uuidv4} from 'uuid';
import Link from "next/link";
export type StateDevice = {
    loop_type: string[]|[];
    color: number[]|[];
    memory: number[]|[];
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
        loop_type: [],
        color: [],
        memory: [],
        loop: [],
        connection: [],
        country: [],
        price: null
    })
    const changeState = (name: string, value: string|number)=>{
        setStateCard((prevState)=>({...prevState, [name]: value}))
    }

    const price = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
    }).format(stateCard.price).replace(/(,00)/g, '')

    useEffect(() => {
        filterOptions(devices, setStateCard)
    }, []);


    //
    useEffect(() => {
        const picType = model.pic_type;
        switch (picType){
            case ('color'):
                if(stateCard.color.length){
                    const getInfoColor = respColors(colors, stateCard.color[0])
                    getInfoColor&&setNamePhoto(getNamePhoto(title, getInfoColor.name))
                }
                break;
            case ('loop_type'):
                if(stateCard.loop_type.length){
                    setNamePhoto(getNamePhoto(title, stateCard.loop_type[0], true))
                }
                break;
        }

    }, [stateCard.color, stateCard.loop_type]);



    return (
        <article className={style.card}>
            <div className={style.cardHeader}>
                <h2 className={style.cardHeaderTitle}>{title}</h2>
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
                    <div className={style.cardFooterPriceBox}>
                        <span>от {price}</span>
                        <Link className={style.cardFooterPriceBoxBtn} href={`/shop/${type}/${model.slug}`}>Выбрать</Link>
                    </div>
                </div>
            </div>

        </article>
    );
};

export default ModelCard;
