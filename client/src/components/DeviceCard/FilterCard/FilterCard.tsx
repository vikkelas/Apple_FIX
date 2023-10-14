import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {ResponseDeviceColorI} from "@/interface/ResponseInterface";
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
    colorData?: ResponseDeviceColorI[]
    stateFilter: StateFilter;
}

const FilterCard:React.FC<PropsFilter> = (
    {
        title,
        listFilter,
        idItem,
        colorData,
        handleStateFilter,
        stateName,
        stateFilter

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
                return (
                    <li
                        key={uuidv4()}
                        onClick={()=>handleStateFilter(stateName, item)}
                        className={clsx([
                            style.filterListItem,
                            stateName!=='color'&&style.paddingItemText,
                            // @ts-ignore
                            stateFilter[stateName]==item&&style.activeItem
                        ])}
                    >
                        {typeof item==='string'&&stateName!=='memory'?item:null}
                        {stateName==='memory'?+item>100?`${item}Гб`:`${item}Тб`:null}
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
