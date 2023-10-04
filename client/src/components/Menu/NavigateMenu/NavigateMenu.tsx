import React from 'react';
import style from './NavigateMenu.module.sass';
import IconSVG from "../../Assets/IconSVG.tsx";
import SvgList from "@/helpers/SvgList.ts";
import clsx from "clsx";

const NavigateMenu:React.FC<{setMenu:(e)=> void, activeMenu: string|null }> = ({setMenu, activeMenu}) => {
    return (
        <nav className={style.menu}>
            <ul className={style.menuList}>
                <li
                    id={'store'}
                    onClick={setMenu}
                    className={style.menuListItem}>
                    <IconSVG height={32} width={32} imageId={activeMenu==='store'?SvgList.bag_store_black:SvgList.bag_store}/>
                    <span className={clsx([style.menuListItemText, activeMenu==='store'&&style.menuListItemBlack ])}>Магазин</span>
                </li>
                <li
                    id={'service'}
                    onClick={setMenu}
                    className={style.menuListItem}>
                    <IconSVG height={32} width={32} imageId={activeMenu==='service'?SvgList.toolsBlack:SvgList.tools}/>
                    <span className={clsx([style.menuListItemText, activeMenu==='service'&&style.menuListItemBlack ])}>Ремонт</span>
                </li>
                <li
                    id={'menu'}
                    onClick={setMenu}
                    className={style.menuListItem}>
                    <IconSVG height={32} width={32} imageId={activeMenu==='menu'?SvgList.menuBlack:SvgList.menu}/>
                    <span className={clsx([style.menuListItemText, activeMenu==='menu'&&style.menuListItemBlack ])}>Меню</span>
                </li>
            </ul>
        </nav>
    );
};

export default NavigateMenu;
