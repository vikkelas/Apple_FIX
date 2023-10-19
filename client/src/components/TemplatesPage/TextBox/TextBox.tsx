import React from 'react';
import style from './TextBox.module.sass'
import {TextTemplateData} from "@/data/TemplatePageData";
import {v4 as uuidv4} from 'uuid';

const TextBox:React.FC<{keyData:string}> = ({keyData}) => {
    const templateData = TextTemplateData[keyData]
    return (
        <div className={style.container}>
            {templateData.map(item => {
                const {title, list} = item;
                return (
                    <div
                        key={uuidv4()}
                        className={style.containerBox}>
                        <h2>{title}</h2>
                        <div className={style.containerBoxText}>
                            {list.map(i=><p key={uuidv4()}>{i}</p>)}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default TextBox;
