import {ResponseDeviceI} from "../../interface/ResponseInterface";
import {State} from "@/components/Models/ModelCard/ModelCard";

const filterOptions = (dvices:ResponseDeviceI[], setOptions:(value: (((prevState: State) => State) | State)) => void) => {
    const color = [];
    const memory = [];
    const loop = [];
    const country = [];
    const connection = [];

    dvices.forEach(item=>{
        const checkColor = color.includes(item.device_color_id)
        const checkMemory = memory.includes(item.memory)
        const checkCountry = country.includes(item.country)
        const checkConnection = connection.includes(item.wifi)
        const checkLoop = loop.includes(`${item.loop_type?item.loop_type:''}${item.loop_type&&item.loop_size?' ':''}${item.loop_size?item.loop_size:''}`)
        if(!checkColor)color.push(item.device_color_id)
        if(!checkConnection)connection.push(item.wifi)
        if(!checkCountry)country.push(item.country)
        if(!checkMemory)memory.push(item.memory)
        if(!checkLoop&&(item.loop_type||item.loop_size))loop.push(`${item.loop_type?item.loop_type:''}${item.loop_type&&item.loop_size?' ':''}${item.loop_size?item.loop_size:''}`)
    })
    setOptions((prevState)=>({
        ...prevState,
        color,
        loop,
        memory,
        country,
        connection
    }))
}
export default filterOptions;
