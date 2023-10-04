import React from 'react';
import {v4 as uuidv4} from 'uuid';
import style from './MenuList.module.sass';
import {MenuI} from "../../../../interface/MenuInterface";
import MenuItem from "@/components/Menu/MenuItem/MenuItem";
import {AnimatePresence, motion} from 'framer-motion';

type Props = {
    menuLust: MenuI[];
    setActiveMenu:  (value: (((prevState: (string | null)) => (string | null)) | string | null)) => void
}

const MenuList:React.FC<Props> = ({menuLust, setActiveMenu}) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1 }}
            exit={{opacity: 0}}
            className={style.container}
            onClick={()=>setActiveMenu(null)}>
            <motion.ul
                onClick={(e)=>e.stopPropagation()}
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 100}}
                className={style.containerMenuList}>
                <AnimatePresence key={'menuLists'} mode={"wait"}>
                    {menuLust.map((item, index)=>
                        <MenuItem
                            key={uuidv4()}
                            itemMenu={item}
                            index={index}
                            setActiveMenu={setActiveMenu}
                        />)}
                </AnimatePresence>
            </motion.ul>
        </motion.div>
    );
};

export default MenuList;
