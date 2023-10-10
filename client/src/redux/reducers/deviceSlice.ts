import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DeviceI} from "@/redux/interface/DeviceInterface";

const initialState:DeviceI = {
    color: null,
    price: null,
    conection: null,
    loop: null,
    model: null,
    country: null,
    proc: null,
    year: null,
    memory: null,
}

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        changeState: (state:DeviceI, action:PayloadAction<{ name: string, value: string|number }>)=>{
            const {name, value} = action.payload;
            state[name] = value;
        },
        clearState: (state:DeviceI)=>{
            state.color =null;
            state.price =null;
            state.conection=null;
            state.loop =null;
            state.model =null;
            state.country =null;
            state.proc =null;
            state.year =null;
            state.memory =null;
        }
    }
});

export const {changeState, clearState} = deviceSlice.actions
export default deviceSlice.reducer;
