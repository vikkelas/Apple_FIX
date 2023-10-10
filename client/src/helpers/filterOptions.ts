import {ResponseDeviceI} from "../../interface/ResponseInterface";
import {StateDevice} from "@/components/Models/ModelCard/ModelCard";
import {minimumPrice} from "@/helpers/helpFunction";

const sortMemory = (arr: string[]) => {
    const sortArr = [];
    arr.forEach(i=>{
        sortArr.push(i.replace(/[\D]/g, ''));
    })
    return sortArr.sort( (a,b) => a - b )
}
const filterOptions = (dvices:ResponseDeviceI[], setOptions:(value: (((prevState: StateDevice) => StateDevice) | StateDevice)) => void) => {
    const color = [];
    const memory = [];
    const loop = [];
    const country = [];
    const connection = [];
    const price = []

    dvices.forEach((item, index)=>{
        const checkColor = color.includes(item.device_color_id)
        const checkMemory = memory.includes(item.memory)
        const checkCountry = country.includes(item.country)
        const checkConnection = connection.includes(item.wifi)
        const checkLoop = loop.includes(`${item.loop_type?item.loop_type:''}${item.loop_type&&item.loop_size?' ':''}${item.loop_size?item.loop_size:''}`)
        if(!checkColor&&item.device_color_id)color.push(item.device_color_id)
        if(!checkConnection&&item.wifi)connection.push(item.wifi)
        if(!checkCountry&&item.country)country.push(item.country)
        if(!checkMemory&&item.memory)memory.push(item.memory)
        if(!checkLoop&&(item.loop_type||item.loop_size))loop.push(`${item.loop_type?item.loop_type:''}${item.loop_type&&item.loop_size?' ':''}${item.loop_size?item.loop_size:''}`)
        price.push(item.price);
    })
    setOptions({
        color: color.sort( (a,b) => a - b ),
        loop,
        memory: memory.length?sortMemory(memory):[],
        country,
        connection,
        price: minimumPrice(price)
    })
}
export default filterOptions;
