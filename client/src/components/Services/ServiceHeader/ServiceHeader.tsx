import React, {useEffect, useRef, useState} from 'react';
import style from "./ServiceHeader.module.sass";
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import clsx from "clsx";
import {motion, AnimatePresence} from "framer-motion";


const ServiceHeader:React.FC<{
    title: string,
    fullList: boolean;
}> = ({title, fullList }) => {
    const ref = useRef(null)
    const [heightTitle, setHeightTitle] = useState('auto');
    useEffect(() => {
        setHeightTitle(ref.current.clientHeight)
    },[])
    return (
        <motion.div
            style={{
                height: `${fullList?heightTitle-35:heightTitle}px`,
                padding: `${fullList?10:0}px 0`
            }}
            ref={ref}
            className={style.header}>
            <AnimatePresence>
                {!fullList&&
                    <motion.div
                        initial={{x:-100, opacity: 0}}
                        animate={{opacity: 1, x: 0}}
                        exit={{x:-100, opacity: 0}}
                    >
                        <IconSVG height={48} width={48} imageId={SvgList.appleService}/>
                    </motion.div>}
            </AnimatePresence>


            <div
                className={style.headerTitle}>
                <AnimatePresence  initial={false}>
                    <motion.h1
                        key={'title'}
                        className={clsx(['titleHevy'])}
                        animate={!fullList?{y: 0, opacity:1}:{y: -100, opacity:0}}
                    >
                        Ремонт Apple
                    </motion.h1>
                    <motion.div
                        animate={!fullList?{top: 0}:{top: -15}}
                        className={style.headerTitleSpan}>
                            {fullList&&
                                <motion.span
                                    key={'span_one'}
                                    initial={{x:-100, opacity: 0}}
                                    animate={{x:0, opacity: 1}}
                                    exit={{x:-100, opacity: 0}}
                                >Ремонт&nbsp;
                                </motion.span>
                            }
                        <span
                            className={style.headerTitleSpanTwo}>{title}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ServiceHeader;
