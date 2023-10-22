import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ResponseDeviceColorI, ResponseDeviceI} from "@/interface/ResponseInterface";
import ColorPin from "@/components/Assets/ColorPin";
import style from './FilterCard.module.sass';
import clsx from "clsx";
import {StateFilter} from "@/components/DeviceCard/DeviceCard";

type PropsFilter = {
    title: string;
    listFilter: string[]|number[];
    handleStateFilter: (select: string,value:string|number)=>void,
    idItem: string,
    stateName: string,
    colorData?: ResponseDeviceColorI[]|null
    stateFilter: StateFilter;
    colorFilterDevice: ResponseDeviceI[] | null
}

const FilterCard:React.FC<PropsFilter> = (
    {
        title,
        listFilter,
        idItem,
        colorData,
        handleStateFilter,
        stateName,
        stateFilter,
        colorFilterDevice
    }) => {

    return (
        <ul className={style.filterList}>
            <li><span>{title}</span></li>
            {listFilter.map(item =>{
                let colorItem:null|ResponseDeviceColorI = null;
                if(idItem==="device_color_id"&&colorData){
                    const index = colorData.findIndex(i=>i.id===item);
                    colorItem = colorData[index];
                }
                let check = false;
                colorFilterDevice?.forEach(i=>{
                    if (stateName === 'color') {
                        return;
                    }
                    switch (stateName) {
                        case('memory'):
                            if (i.memory && (+i.memory.replace(/\D/g, '') === +item)){
                                check = true
                            }
                            break;
                        case('connection'):
                            let newFiltrerCon = colorFilterDevice;
                            if (newFiltrerCon&&stateFilter.memory){
                                newFiltrerCon=newFiltrerCon.filter(d=>(d.memory&&+d.memory.replace(/\D/g, ''))===stateFilter.memory)
                            }
                            if(newFiltrerCon?.length){
                                const index = newFiltrerCon.findIndex(s=>s.wifi===item);
                                if(index!==-1)check=true;
                            }
                            break;
                        case('loop'):
                            let newFiltrerLoop = colorFilterDevice;
                            if (newFiltrerLoop&&stateFilter.memory){
                                newFiltrerLoop=newFiltrerLoop.filter(d=>(d.memory&&+d.memory.replace(/\D/g, ''))===stateFilter.memory)
                            }
                            if (newFiltrerLoop?.length&&stateFilter.connection){
                                newFiltrerLoop=newFiltrerLoop.filter(d=>(d.wifi===stateFilter.connection))
                            }
                            if(newFiltrerLoop?.length){
                                const index = newFiltrerLoop.findIndex(s=>`${s.loop_type?s.loop_type:''}${s.loop_type&&s.loop_size?' ':''}${s.loop_size?s.loop_size:''}`===item);
                                if(index!==-1)check=true;
                            }
                            break;
                        case ('country'):
                            let newFiltrer = colorFilterDevice;
                            if (newFiltrer&&stateFilter.memory){
                                newFiltrer=newFiltrer.filter(d=>(d.memory&&+d.memory.replace(/\D/g, ''))===stateFilter.memory)
                            }
                            if (newFiltrer?.length&&stateFilter.connection){
                                newFiltrer=newFiltrer.filter(d=>(d.wifi===stateFilter.connection))
                            }
                            if (newFiltrer?.length&&stateFilter.loop){
                                newFiltrer=newFiltrer.filter(d=>`${i.loop_type?i.loop_type:''}${i.loop_type&&i.loop_size?' ':''}${i.loop_size?i.loop_size:''}`===stateFilter.loop)
                            }
                            if(newFiltrer?.length){
                                const index = newFiltrer.findIndex(s=>s.country===item);
                                if(index!==-1)check=true;
                            }
                            break;
                    }
                })
                return (
                    <li
                        key={uuidv4()}
                        onClick={()=>handleStateFilter(stateName, item)}
                        className={clsx([
                            stateName!=='color'&&!check&&style.noFilterItem,
                            style.filterListItem,
                            stateName!=='color'&&style.paddingItemText,
                            // @ts-ignore
                            stateFilter[stateName]==item&&style.activeItem
                        ])}
                    >
                        {typeof item==='string'&&stateName!=='memory'?item:null}
                        {stateName==='memory'?+item>63?`${item}Гб`:`${item}Тб`:null}
                        {colorItem!==null?<ColorPin
                            firstColor={colorItem.first_color}
                            secondColor={colorItem.second_color}
                            keyId={uuidv4()}/>:null}
                    </li>
                )
            })}
        </ul>
    );
};

export default FilterCard;
