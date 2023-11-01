import {ResponseDeviceColorI} from "@/interface/ResponseInterface";

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
    return `${typeName.replace(/\./g, '_').trimStart().trimEnd().split(' ').join('-')}-${longName?color.split(' ').join('-'):color}.jpg`.toLowerCase()
}

const minimumPrice = (priceList: number[]):number => {
    let minimumPrice = priceList[0];
    priceList.forEach(item => {
        if(item<minimumPrice)minimumPrice=item;
    })
    return minimumPrice;
}

const formattedPhoneNumber:(value:string)=>string = (value)=> {
    if(!value) return value
    let phoneNumber = value.replace(/[^\d]/g, '');
    let formatted = ''
    if(!phoneNumber)return ''
    if(['7','8','9'].indexOf(phoneNumber[0])>-1){
        if(phoneNumber[0]==='9')phoneNumber='7'+phoneNumber
        let firstSymbols = (phoneNumber[0]==='8')?'8':'+7'
        formatted = firstSymbols+" ";
        if(phoneNumber.length>1){
            formatted+='('+phoneNumber.substring(1,4);
        }
        if(phoneNumber.length>=5){
            formatted+=') ' +phoneNumber.substring(4,7)
        }
        if(phoneNumber.length>=8){
            formatted+='-' +phoneNumber.substring(7,9)
        }
        if(phoneNumber.length>=10){
            formatted+='-' +phoneNumber.substring(9,11)
        }
    }
    else return `+${phoneNumber.substring(0,16)}`
    return formatted
}


export {respColors, getNamePhoto, minimumPrice, formattedPhoneNumber};
