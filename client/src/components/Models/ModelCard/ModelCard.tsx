import React, {useEffect, useState} from 'react';
import {ResponseDeviceColorI, ResponseTypeModelI} from "../../../../interface/ResponseInterface";
import filterOptions from "@/helpers/filterOptions";
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import {useRouter} from "next/router";
import Image from "next/image";
import {getNamePhoto, respColors} from "@/helpers/helpFunction";
import style from './ModelCard.module.sass';

export type State = {
    color: number[]|[];
    memory: string[]|[];
    loop: string[]|[];
    connection: string[]|[];
    country: string[]|[];
}

const ModelCard:React.FC<{model:ResponseTypeModelI, colors:ResponseDeviceColorI[]}> = ({model, colors}) => {
    const router = useRouter()
    const type = router.query.type;

    const {devices, title} = model
    const [namePhoto, setNamePhoto] = useState('')
    const [stateCard, setStateCard] = useState<State>({
        color: [],
        memory: [],
        loop: [],
        connection: [],
        country: [],
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
            setNamePhoto(getNamePhoto(title, getInfoColor.name))
        }
    }, [stateCard.color]);

    return (
        <article className={style.card}>
            <div>
                <h2>{title}</h2>
                <IconSVG width={20} height={20} imageId={SvgList.info}/>
            </div>
            <div className={style.cardImage}>
                {namePhoto!==''?<Image
                    src={`/images/${type}/${namePhoto}`}
                    alt={'device'}
                    fill
                />:null}
            </div>

        </article>
    );
};

export default ModelCard;
