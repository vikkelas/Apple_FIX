import React, {useEffect, useState} from 'react';
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import {ResponseDeviceColorI, ResponseDeviceI, ResponseTypeModelI} from "../../../interface/ResponseInterface";
import {StateDevice} from "@/components/Models/ModelCard/ModelCard";
import filterOptions from "@/helpers/filterOptions";
import Image from "next/image";
import {useRouter} from "next/router";
import {getNamePhoto, respColors} from "@/helpers/helpFunction";
import FilterCard from "@/components/DeviceCard/FilterCard/FilterCard";
import style from './DeviceCard.module.sass';
import Link from "next/link";

export type StateFilter = {
    color: null | number;
    country: null | string;
    connection: null | string;
    price: null | number;
    loop: null | string;
    memory: null | string;
}

const DeviceCard:React.FC<{modelDevice:ResponseTypeModelI, colorData:ResponseDeviceColorI[]}> = (
    {
        modelDevice,
        colorData
    }) => {
    const router = useRouter()
    const type = router.query.type;
    const {devices, title, } = modelDevice;
    const [buyBtnState, setBuyBtnState] = useState(true);
    const [filterDevice, setFilterDevice] = useState<ResponseDeviceI[]>(devices)
    const [namePhoto, setNamePhoto] = useState<string|null>(null)
    const picType = modelDevice.pic_type;
    const [stateFilter, setStateFilter] = useState<StateFilter>({
        color: null,
        country: null,
        connection: null,
        price: null,
        loop: null,
        memory: null,
    })

    const [state, setState] = useState<StateDevice>({
        memory: [],
        connection: [],
        color: [],
        country: [],
        loop: [],
        price: null,
        loop_type: []
    })
    // filter
    const handleStateFilter = (name: string, value: string|number) => {
       setStateFilter((prevState)=>({...prevState, [name]: value}))
    }

    const clearStateFilter = () => {
        setStateFilter({
            color: null,
            country: null,
            connection: null,
            price: null,
            loop: null,
            memory: null,
        })
    }

    const optionsFilter = (name:string, value:string|number, i:ResponseDeviceI) => {
        switch (name){
            case ("color"):
                if(i.device_color_id)return i.device_color_id===value;
                break;
            case ("loop"):
                const nameLoop = `${i.loop_type?i.loop_type:''}${i.loop_type&&i.loop_size?' ':''}${i.loop_size?i.loop_size:''}`;
                return nameLoop === value;
            case ("memory"):
                if(i.memory)return  i.memory.replace(/\D/g, '')===value;
                break;
            default:
                // @ts-ignore
                return i[name]===value
        }
    }

    const handleFilterDevice = (name:string, value: string|number) => {
        const newFilterDevice = filterDevice.filter(i => {
            return optionsFilter(name, value, i)
        })
        if(newFilterDevice.length){
            handleStateFilter(name, value)
            setFilterDevice(newFilterDevice)
        }else{
            setFilterDevice(devices.filter(i=>{
                return optionsFilter(name, value, i)
            }));
            clearStateFilter();
            handleStateFilter(name, value);
        }
    }

    useEffect(() => {
        if(filterDevice.length===1){
            const deviceSelect = filterDevice[0]
            for (const deviceKey in deviceSelect) {
                // @ts-ignore
                if(deviceSelect[deviceKey]){
                    let name:string|null = null;
                    let value: string|number|null = null;
                    switch (deviceKey){
                        case ("device_color_id"):
                            name = 'color';
                            value = deviceSelect[deviceKey]
                            break;
                        case ("loop_type"):
                            const nameLoop = `${deviceSelect.loop_type?deviceSelect.loop_type:''}${deviceSelect.loop_type&&deviceSelect.loop_size?' ':''}${deviceSelect.loop_size?deviceSelect.loop_size:''}`;
                            name = 'loop';
                            value = nameLoop;
                            break;
                        case ("loop_size"):
                            const nameSize = `${deviceSelect.loop_type?deviceSelect.loop_type:''}${deviceSelect.loop_type&&deviceSelect.loop_size?' ':''}${deviceSelect.loop_size?deviceSelect.loop_size:''}`;
                            name = 'loop';
                            value = nameSize;
                            break;
                        case ("memory"):
                            name = 'memory';
                            value = deviceSelect[deviceKey]&&`${deviceSelect[deviceKey]}`.replace(/\D/g, '');
                            break;
                        default:
                            if(stateFilter.hasOwnProperty(deviceKey)){
                                name = deviceKey;
                                // @ts-ignore
                                value = deviceSelect[deviceKey];
                            }
                    }
                    name&&value&&handleStateFilter(name, value)
                }
            }
            setBuyBtnState(false)
        }else{
            setBuyBtnState(true)
        }
    }, [filterDevice]);

    useEffect(() => {
        switch(picType){
            case ('color'):
                if(!stateFilter.color&&state.color.length){
                    handleFilterDevice('color', state.color[0])
                }
                break;
            case('loop_type'):
                if(!stateFilter.loop&&state.loop.length){
                    setNamePhoto(getNamePhoto(title, state.loop[0].replace(/(\([A-Za-z\-\/]{1,3}\))/gm,''), true))
                }
                break;
        }
        if(!stateFilter.color&&state.color.length){
            handleFilterDevice('color', state.color[0])
        }
    }, [state.color]);

    useEffect(() => {
        switch (picType){
            case ('color'):
                if(stateFilter.color){
                    const getInfoColor = respColors(colorData, stateFilter.color)
                    getInfoColor&&setNamePhoto(getNamePhoto(title, getInfoColor.name))
                }
                break;
            case ('loop_type'):
                if(stateFilter.loop){
                    setNamePhoto(getNamePhoto(title, stateFilter.loop.replace(/(\([A-Za-z\-\/]{1,3}\))/gm,''), true))
                }
                break;
        }

    }, [stateFilter.color,stateFilter.loop]);

    useEffect(() => {
        filterOptions(devices, setState)
    }, []);

    return (
        <section className={style.device}>
            <div className={style.deviceCard}>
                <div className={style.deviceCardHeader}>
                    <Link
                        href={`/shop/${type}`}
                        className={style.deviceCardHeaderIcon}>
                        <IconSVG height={16} width={7} imageId={SvgList.arrowLeft}/>
                    </Link>
                    <h1>{title}</h1>
                </div>
                <div className={style.deviceCardMain}>
                    <div className={style.deviceCardMainPhoto}>
                        {namePhoto?
                            <Image
                                src={`/images/${type}/${namePhoto}`}
                                fill
                                alt={`${namePhoto}`}
                        />:null}
                    </div>
                    <span className={style.deviceCardMainSelectTitle}>Сделайте выбор</span>
                    {state.color.length?<FilterCard
                        stateFilter={stateFilter}
                        title={'Цвет:'}
                        listFilter={state.color}
                        handleStateFilter={handleFilterDevice}
                        idItem={'device_color_id'}
                        stateName={'color'}
                        colorData={colorData}
                    />:null}
                </div>
                <div className={style.deviceCardFooter}>
                    {state.memory.length?<FilterCard
                        stateFilter={stateFilter}
                        title={'Память:'}
                        listFilter={state.memory}
                        handleStateFilter={handleFilterDevice}
                        idItem={'memory'}
                        stateName={'memory'}
                    />:null}
                    {state.country.length?<FilterCard
                        stateFilter={stateFilter}
                        title={'Страна:'}
                        listFilter={state.country}
                        handleStateFilter={handleFilterDevice}
                        idItem={'country'}
                        stateName={'country'}
                    />:null}
                    {state.connection.length?<FilterCard
                        stateFilter={stateFilter}
                        title={'Связь:'}
                        listFilter={state.connection}
                        handleStateFilter={handleFilterDevice}
                        idItem={'connection'}
                        stateName={'connection'}
                    />:null}
                    {state.loop.length?<FilterCard
                        stateFilter={stateFilter}
                        title={'Ремешок:'}
                        listFilter={state.loop}
                        handleStateFilter={handleFilterDevice}
                        idItem={'loop'}
                        stateName={'loop'}
                    />:null}

                    <div className={style.deviceCardFooterPriceBox}>
                        <span>{stateFilter.price?`${stateFilter.price}₽`:null}</span>
                        <button disabled={buyBtnState}>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeviceCard;
