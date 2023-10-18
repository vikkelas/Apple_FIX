import React, {ReactElement, useEffect, useRef, useState} from 'react';
import Head from "next/head";
import NavigateMenu from "@/components/Menu/NavigateMenu/NavigateMenu";
import MenuList from "@/components/Menu/MenuList/MenuList";
import menuList from "@/data/MenuList";
import {MenuI} from "@/interface/MenuInterface";
import {ResponseTypesI} from "@/interface/ResponseInterface";
import parseMenuList from "@/helpers/parseMenuList";
import {AnimatePresence} from "framer-motion";
import Horizontal from "@/components/TemplatesPage/Horizontal/Horizontal";

type LayoutProps = {
    description: string;
    keywords?: string;
    title: string;
    children: ReactElement;
}

const Layout:React.FC<LayoutProps> = ({description, title, keywords='', children}) => {
    const targetRef = useRef<HTMLElement | null>(null);
    const [typesModels, setTypesModals] = useState<null|ResponseTypesI[]>(null)
    const [activeMenu, setActiveMenu] = useState<string |null>(null)
    const [listMenu, setListMenu] = useState<null | MenuI[]>(null)
    const [horizontal, setHorizontal] = useState(false)
    const [size, setSize] = useState({
        height: 0,
        width: 0
    })
    const setMenu = (e) => {
        const menu_item = e.currentTarget.id
        if(menu_item===activeMenu){
            setActiveMenu(null);
            return;
        }
        switch (menu_item){
            case ('store'):
                if(typesModels){
                    setListMenu(parseMenuList(typesModels, menu_item));
                    setActiveMenu(menu_item)
                }
                break;
            case ('service'):
                if(typesModels){
                    setListMenu(parseMenuList(typesModels, menu_item));
                    setActiveMenu(menu_item)
                }

                break;
            case ('menu'):
                setListMenu(menuList)
                setActiveMenu(menu_item)
                break;
        }
    }

    const getServiceList = async () => {
        fetch(`${process.env.APP_URL_BACKEND}/api/types`)
            .then(r=>r.json())
            .then(res=>setTypesModals(res));
    }

    const resizeHandler = () => {
        const { clientHeight, clientWidth } = targetRef.current || {};
        setSize({ height: clientHeight, width: clientWidth });
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    useEffect(() => {
        const {width, height} = size;
        if(width>height){
            setHorizontal(true)
            return
        }
        setHorizontal(false)
    }, [size]);

    useEffect(() => {
        getServiceList().then()
    }, []);
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Head>
            <main ref={targetRef}>
                {!horizontal?
                    <>
                        <div className={'container_content'}>
                        {children}
                    </div>
                        <NavigateMenu
                            activeMenu={activeMenu}
                            setMenu={setMenu}
                        />
                        <AnimatePresence key={'menu'}>
                        {activeMenu&&listMenu?
                            <MenuList
                                menuLust={listMenu}
                                setActiveMenu={setActiveMenu}
                            />:null}
                        </AnimatePresence>
                    </>:null}
                {horizontal?<Horizontal/>:null}
            </main>
        </>
    );
};

export default Layout;
