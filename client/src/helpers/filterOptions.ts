import {ResponseDeviceI} from "@/interface/ResponseInterface";
import {StateDevice} from "@/components/Models/ModelCard/ModelCard";
import {minimumPrice} from "@/helpers/helpFunction";

const sortMemory = (arr: string[]) => {
    let sortArr:[]|number[] = [];
    arr.forEach(i=>{
        let str = +i.replace(/[\D]/g, '')
        sortArr = [...sortArr, str];
    })
    return sortArr.sort( (a,b) => a - b )
}
const filterOptions = (dvices:ResponseDeviceI[], setOptions:(value: (((prevState: StateDevice) => StateDevice) | StateDevice)) => void) => {
    const color: number[] = [];
    const memory: string[] = [];
    const loop:string[] = [];
    const country:string[] = [];
    const connection:string[] = [];
    const price:number[] = [];
    const loop_type:string[] = [];

    dvices.forEach((item, index)=>{
        const checkLoopType = item.loop_type&&loop_type.includes(item.loop_type)
        const checkColor = color.includes(item.device_color_id)
        const checkMemory = item.memory&&memory.includes(item.memory)
        const checkCountry = item.country&&country.includes(item.country)
        const checkConnection = item.wifi&&connection.includes(item.wifi)
        const checkLoop = loop.includes(`${item.loop_type?item.loop_type:''}${item.loop_type&&item.loop_size?' ':''}${item.loop_size?item.loop_size:''}`)
        if(!checkLoopType&&item.loop_type)loop_type.push(item.loop_type)
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
        price: minimumPrice(price),
        loop_type
    })
}
export default filterOptions;
