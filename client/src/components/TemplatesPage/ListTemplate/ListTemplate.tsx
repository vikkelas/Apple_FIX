import React from 'react';
import style from './ListTemplate.module.sass'
import {TemplateListData} from "@/data/TemplatePageData";

const ListTemplate:React.FC<{keyList:string}> = ({keyList}) => {
    const {list, title} = TemplateListData[keyList]
    return (
        <div className={style.tradeIn}>
            <h2 className={style.tradeInTitle}>{title}</h2>
            <ul className={style.tradeInList}>
                {list.map((item, index)=>{
                    const {title, description} = item
                    return (
                        <li
                            key={index}
                            className={style.tradeInListItem}
                        >
                            <div className={style.tradeInListItemCount}>{index+1}</div>
                            <div className={style.tradeInListItemInfo}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ListTemplate;
