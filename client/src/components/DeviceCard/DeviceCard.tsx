import React, {useEffect, useState} from 'react';
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import {ResponseDeviceColorI, ResponseDeviceI, ResponseTypeModelI} from "@/interface/ResponseInterface";
import {StateDevice} from "@/components/Models/ModelCard/ModelCard";
import filterOptions from "@/helpers/filterOptions";
import Image from "next/image";
import {useRouter} from "next/router";
import {getNamePhoto, respColors} from "@/helpers/helpFunction";
import FilterCard from "@/components/DeviceCard/FilterCard/FilterCard";
import style from './DeviceCard.module.sass';
import Link from "next/link";
import {useDispatch} from "react-redux";
import {changeState} from "@/redux/reducers/orderSlice";
import {TypeForm} from "@/interface/FormInterface";
import {DeviceOrderI} from "@/redux/interface/OrderInterface";
import clsx from "clsx";

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
    const dispatch = useDispatch();
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

    const priceFormated = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
    }).format(stateFilter.price).replace(/(,00)/g, '')

    // filter
    const handleStateFilter = (name: string, value: string|number) => {
       setStateFilter((prevState)=>({...prevState, [name]: value}))
    }
    // clear state
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
    // check select
    const optionsFilter = (name:string, value:string|number, i:ResponseDeviceI) => {
        switch (name){
            case ("color"):
                if(i.device_color_id)return i.device_color_id===value;
                break;
            case ("loop"):
                const nameLoop = `${i.loop_type?i.loop_type:''}${i.loop_type&&i.loop_size?' ':''}${i.loop_size?i.loop_size:''}`;
                return nameLoop === value;
            case ("memory"):
                if(i.memory)return  +(i.memory.replace(/\D/g, ''))===value;
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

    const handleSaveBasket = () => {
        if(filterDevice.length===1){
            const memory = stateFilter.memory?stateFilter.memory<100?` ${stateFilter.memory}Тб`:` ${stateFilter.memory}Гб`:null;
            const color = colorData.find(item=>item.id===stateFilter.color);
            const loop = stateFilter.loop?`<br>${stateFilter.loop}`:null;
            const wifi = stateFilter.connection?`<br>${stateFilter.connection}`:null;
            const infoDevice: DeviceOrderI = {
                title: `${modelDevice.title}${memory?memory:''}<br>${color?color.title:null}`,
                desc: `${stateFilter.country?stateFilter.country:''}${loop?loop:''}${wifi?wifi:''}`,
                price: `${filterDevice[0].price}₽`
            }
            dispatch(changeState([
                {name:"device", value: infoDevice},
                {name: "typeForm", value: TypeForm.Order},
            ]))
            router.push('/order').then()
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
        switch (picType){
            case ('color'):
                if(stateFilter.color){
                    const getInfoColor = respColors(colorData, stateFilter.color)
                    getInfoColor&&setNamePhoto(getNamePhoto(title, getInfoColor.name))
                }
                break;
            case ('loop_type'):
                if(stateFilter.loop){
                    const str = stateFilter.loop.replace(/(\([A-Za-z\-\/]{1,3}\))/gm,'').replace(/\s\s*$/gm,'');
                    setNamePhoto(getNamePhoto(title,str , true))
                }
                break;
        }
    }, [stateFilter.color, stateFilter.loop]);



    useEffect(() => {
        filterOptions(devices, setState)
        const firstDevice = devices[0];
        if(firstDevice){
            setFilterDevice([devices[0]]);
        }
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
                                className={clsx([router.query.type==='apple-watch'&&style.scale])}
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
                        <span>{priceFormated}</span>
                        <button
                            onClick={handleSaveBasket}
                            disabled={buyBtnState}
                        >
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeviceCard;
