import {ResponseTypesI} from "@/interface/ResponseInterface";
import {MenuI} from "@/interface/MenuInterface";

const parseMenuList = (list:ResponseTypesI[], typeMenu: string):MenuI[] | [] => {
    const arrayMenu= [];
    switch (typeMenu){
        case ('store'):
            list.forEach(item=>{
                arrayMenu.push({
                    icon: item.icon_name,
                    title: `Купить ${item.title}`,
                    link: `/shop/${item.slug}`,
                    subMenu: null
                })
            })
            return arrayMenu;
        case ('service'):
            list.forEach(item=>{
                const arrayModelsServices = []
                if(item.device_models.length){
                    item.device_models.forEach(i=>{
                        if(i.device_services.length!==0){
                            arrayModelsServices.push({
                                title: i.title,
                                link: `/service/${i.slug}`
                            })
                        }
                    })
                }
                arrayMenu.push({
                    icon: item.icon_name,
                    title: `Ремонт ${item.title}`,
                    link: null,
                    subMenu: arrayModelsServices,
                    type: 'service'
                })
            })
            return arrayMenu;
    }
}

export default parseMenuList;
