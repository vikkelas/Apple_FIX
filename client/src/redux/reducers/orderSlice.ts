import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DeviceOrder, OrderI} from "@/redux/interface/OrderInterface";
import {ResponseDeviceI} from "@/interface/ResponseInterface";

const initialState: OrderI = {
    typeForm: null,
    device: null,
    service: null,
    name: '',
    phone: '',
    time: '',
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        changeState: (state:OrderI, action:PayloadAction<{ name: string, value: string|DeviceOrder }[]>)=>{
            action.payload.forEach((item)=>{
                const {name, value} = item
                state[name] = value;
            })
        },
        clearState: (state:OrderI)=>{
            state.device =null;
            state.name ='';
            state.phone='';
            state.time ='';
        }
    }
});

export const {changeState, clearState} = orderSlice.actions
export default orderSlice.reducer;
