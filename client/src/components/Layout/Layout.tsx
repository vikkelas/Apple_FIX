import React, {ReactElement, useEffect, useRef, useState} from 'react';
import Head from "next/head";
import NavigateMenu from "@/components/Menu/NavigateMenu/NavigateMenu";
import MenuList from "@/components/Menu/MenuList/MenuList";
import menuList from "@/data/MenuList";
import {MenuI} from "@/interface/MenuInterface";
import parseMenuList from "@/helpers/parseMenuList";
import {AnimatePresence} from "framer-motion";
import Horizontal from "@/components/TemplatesPage/Horizontal/Horizontal";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "@/redux/rootReducer";
import {changeState} from "@/redux/reducers/menuSlice";

type LayoutProps = {
    description: string;
    keywords?: string;
    title: string;
    children: ReactElement;
}

const Layout:React.FC<LayoutProps> = ({description, title, keywords='', children}) => {
    const targetRef = useRef<HTMLElement | null>(null);
    const {typesMenu} = useSelector((state:AppState)=>state.menu)
    // const [typesModels, setTypesModals] = useState<null|ResponseTypesI[]>(null)
    const [activeMenu, setActiveMenu] = useState<string |null>(null)
    const [listMenu, setListMenu] = useState<null | MenuI[]>(null)
    const [horizontal, setHorizontal] = useState(false)
    const [size, setSize] = useState({
        height: 0,
        width: 0
    })
    const setMenu = (e:any) => {
        const menu_item = e.currentTarget.id
        if(menu_item===activeMenu){
            setActiveMenu(null);
            return;
        }
        switch (menu_item){
            case ('store'):
                if(typesMenu){
                    setListMenu(parseMenuList(typesMenu, menu_item));
                    setActiveMenu(menu_item)
                }
                break;
            case ('service'):
                if(typesMenu){
                    setListMenu(parseMenuList(typesMenu, menu_item));
                    setActiveMenu(menu_item)
                }

                break;
            case ('menu'):
                setListMenu(menuList)
                setActiveMenu(menu_item)
                break;
        }
    }
    const dispatch = useDispatch();

    const getServiceList = async () => {
        fetch(`${process.env.APP_URL_BACKEND}/api/types`)
            .then(r=>r.json())
            .then(res=>dispatch(changeState({name: "typesMenu", value: res})));
    }

    const resizeHandler = () => {
        const height = window.screen.availHeight;
        const width = window.screen.availWidth;
        setSize({ height: height??0, width: width??0 });
    };

    useEffect(() => {
        window.addEventListener('orientationchange', resizeHandler)
        // window.addEventListener("resize", resizeHandler);
        return () => {
            // window.removeEventListener("resize", resizeHandler);
            window.removeEventListener('orientationchange', resizeHandler)
        };
    }, []);

    useEffect(() => {
        const {width, height} = size;
        if(width>height){
            setHorizontal(true)
        }else{
            setHorizontal(false)
        }
    }, [size]);

    useEffect(() => {
        if(!typesMenu){
            getServiceList().then()
        }
    }, []);
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
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
