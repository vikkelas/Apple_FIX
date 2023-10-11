import {ResponseDeviceColorI} from "../../interface/ResponseInterface";

const respColors = (colorsDB:ResponseDeviceColorI[], colorId: number): {name: string, firstColor: string, secondColor: string}|undefined=>{
    const element = colorsDB.find(item=>item.id===colorId)
    if(element){
        return{
            name: element.title,
            firstColor: element.first_color,
            secondColor: element.second_color,
        }
    }
}

const getNamePhoto = (typeName: string, color:string, longName: boolean | undefined = false) => {

    return `${typeName.split(' ').join('-')}-${longName?color.split(' ').join('-'):color}.jpg`.toLowerCase()
}

const minimumPrice = (priceList: number[]):number => {
    let minimumPrice = priceList[0];
    priceList.forEach(item => {
        if(item<minimumPrice)minimumPrice=item;
    })
    return minimumPrice;
}

export {respColors, getNamePhoto, minimumPrice};
