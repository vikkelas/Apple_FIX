import React from 'react';
import {TemplateTextList} from "@/data/TemplatePageData";
import {v4 as uuidv4} from 'uuid';
import style from './TextList.module.sass';

const TextList:React.FC<{ kelList: string }> = ({kelList}) => {
    const data = TemplateTextList[kelList];
    const {title, list} = data
    return (
        <div className={style.container}>
            <h2>{title}</h2>
            <ul className={style.containerList}>
                {list.map(item=>{
                    return (
                        <li key={uuidv4()}><strong>{item.title}</strong> - {item.text}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default TextList;
