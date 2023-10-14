import React, {useState} from 'react';
import {MenuI} from "@/interface/MenuInterface";
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import Link from "next/link";
import {v4 as uuidv4} from 'uuid';
import style from './MenuItem.module.sass';
import {useRouter} from "next/router";
import {AnimatePresence, motion} from "framer-motion";

const MenuItem:React.FC<
    {
        itemMenu: MenuI,
        index: number,
        setActiveMenu: (value: (((prevState: (string | null)) => (string | null)) | string | null)) => void
    }> = ({itemMenu, index, setActiveMenu}) => {
    const router = useRouter()
    const variantLists = {
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.05
            }
        }),
        hidden: {
            x: -100,
            opacity: 0,
        }
    }
    const {title, icon, link, subMenu} = itemMenu;
    const [subMenuHidden, setSubMenuHidden] = useState(false);
    const handleClick = () => {
        if(link){
            router.push(link).then()
        }else{
            setSubMenuHidden(!subMenuHidden)
            return
        }
        setActiveMenu(null);
    }
    return (
        <motion.li
            variants={variantLists}
            initial={'hidden'}
            animate={'visible'}
            custom={index}
            onClick={handleClick}
            className={style.itemMenu}>
            <div className={style.itemMenuContainer}>
                <div className={style.itemMenuContainerMain}>
                    <IconSVG height={24} width={24} imageId={SvgList[icon]}/>
                    <span>{title}</span>
                </div>
                {link?null:
                    <motion.div
                        initial={{rotateX: 0}}
                        animate={subMenuHidden?{rotateX:180}:{rotateX: 0}}
                    >
                        <IconSVG height={16} width={16} imageId={SvgList.arrow_blue}/>
                    </motion.div>
                }
            </div>
            <AnimatePresence mode={"wait"}>
                {
                    subMenuHidden&&subMenu?
                        <motion.ul
                            key="listSubmenu"
                            initial={{opacity: 0, height: 0, marginTop: 0}}
                            animate={{opacity: 1, height: "auto", marginTop:"10px"}}
                            exit={{opacity: 0, height: 0, marginTop: 0}}
                            className={style.itemMenuSubList}>
                            {subMenu.map(item=>
                                <Link
                                    key={uuidv4()}
                                    href={item.link}
                                    className={style.itemMenuSubListLink}
                                >
                                    {item.title}
                                </Link>)
                            }
                        </motion.ul>
                    :null
                }
            </AnimatePresence>
        </motion.li>
    );
};

export default MenuItem;
