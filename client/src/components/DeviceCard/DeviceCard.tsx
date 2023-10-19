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
        connection: null,
        loop: null,
        memory: null,
        country: null,
    })

    const [state, setState] = useState<StateDevice>({
        memory: [],
        connection: [],
        color: [],
        loop: [],
        price: null,
        loop_type: [],
        country: [],
    })

    const priceFormated = () => {
        if (state.price){
            return new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
            }).format(state.price).replace(/(,00)/g, '')
        }else {
            return false;
        }
    }

    const firstStateFilter = (device:ResponseDeviceI)=>{
        for (const stateFilterKey in stateFilter) {
            switch (stateFilterKey){
                case ("connection"):
                    if(device.wifi)handleStateFilter('connection', device.wifi);
                    break;
                case ("loop"):
                    if(device.loop_type||device.loop_size)handleStateFilter('loop', `${device.loop_type?device.loop_type:''}${device.loop_type&&device.loop_size?' ':''}${device.loop_size?device.loop_size:''}`)
                    break;
                case("memory"):
                    if(device.memory) handleStateFilter('memory', +(device.memory.replace(/\D/g, '')));
                    break;
                case("color"):
                    if(device.device_color_id) handleStateFilter('color', device.device_color_id);
                    break;
                default:
                    if(device[stateFilterKey])handleStateFilter(stateFilterKey, device[stateFilterKey].toString());
            }
        }
    }

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
    const optionsFilter = ( i:ResponseDeviceI) => {
        let check = true;
        const checkArr = []
        for (const filterItem in stateFilter) {
            if(stateFilter[filterItem]&&filterItem!=="price"){
                switch (filterItem){
                    case ("color"):
                        if(i.device_color_id)checkArr.push(i.device_color_id===stateFilter[filterItem]);
                        break;
                    case ("loop"):
                        const nameLoop = `${i.loop_type?i.loop_type:''}${i.loop_type&&i.loop_size?' ':''}${i.loop_size?i.loop_size:''}`;
                        checkArr.push(nameLoop === stateFilter[filterItem]);
                        break
                    case ("memory"):
                        if(i.memory)checkArr.push(+(i.memory.replace(/\D/g, ''))===stateFilter[filterItem]);
                        break;
                    default:
                        // @ts-ignore
                        checkArr.push(i[filterItem]===stateFilter[filterItem]);
                }
            }
        }
        checkArr.forEach(i => {
            if (!i) {
                check = false
            }
        });
        return check;
    }

    const handleSaveBasket = () => {
        const memory = stateFilter.memory?stateFilter.memory<100?` ${stateFilter.memory}Тб`:` ${stateFilter.memory}Гб`:null;
        const color = colorData.find(item=>item.id===stateFilter.color);
        const loop = stateFilter.loop?`<br>${stateFilter.loop}`:null;
        const wifi = stateFilter.connection?`<br>${stateFilter.connection}`:null;
        const infoDevice: DeviceOrderI = {
            title: `${modelDevice.title}${memory?memory:''}<br>${color?color.title:null}`,
            desc: `${stateFilter.country?stateFilter.country:''}${loop?loop:''}${wifi?wifi:''}`,
            price: `${filterDevice[0]?filterDevice[0].price:''}₽`
        }
        dispatch(changeState([
            {name:"device", value: infoDevice},
            {name: "typeForm", value: TypeForm.Order},
        ]))
        router.push('/order').then()
    }

    useEffect(() => {
        const newFilterDevice = devices.filter(i => {
            return optionsFilter(i)
        })
        console.log(stateFilter)
        setFilterDevice(newFilterDevice)
    }, [stateFilter]);

    useEffect(() => {
        if(filterDevice.length===1){
            const deviceSelect = filterDevice[0]
            setState((prevState)=>({...prevState, price: deviceSelect.price}));
            setBuyBtnState(false)
        }else{
            setState((prevState)=>({...prevState, price: null}));
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
            setFilterDevice([firstDevice]);
            firstStateFilter(firstDevice);
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
                        handleStateFilter={handleStateFilter}
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
                        handleStateFilter={handleStateFilter}
                        idItem={'memory'}
                        stateName={'memory'}
                    />:null}
                    {state.connection.length?<FilterCard
                        stateFilter={stateFilter}
                        title={'Связь:'}
                        listFilter={state.connection}
                        handleStateFilter={handleStateFilter}
                        idItem={'connection'}
                        stateName={'connection'}
                    />:null}
                    {state.loop.length?<FilterCard
                        stateFilter={stateFilter}
                        title={'Ремешок:'}
                        listFilter={state.loop}
                        handleStateFilter={handleStateFilter}
                        idItem={'loop'}
                        stateName={'loop'}
                    />:null}
                    {state.country.length?<FilterCard
                        stateFilter={stateFilter}
                        title={'Страна:'}
                        listFilter={state.country}
                        handleStateFilter={handleStateFilter}
                        idItem={'country'}
                        stateName={'country'}
                    />:null}
                    <div className={style.deviceCardFooterPriceBox}>
                       <span>{priceFormated()?priceFormated():''}</span>
                        <button
                            onClick={handleSaveBasket}
                        >
                            {buyBtnState?'Уточнить о наличие':'Оформить заказ'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeviceCard;
