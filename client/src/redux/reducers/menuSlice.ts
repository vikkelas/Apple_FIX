import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MenuRespI} from "@/redux/interface/MenuInterface";
import {ResponseTypesI} from "@/interface/ResponseInterface";

const initialState:MenuRespI = {
    typesMenu: null,
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        changeState: (state:MenuRespI, action:PayloadAction<{name:string, value:ResponseTypesI[]|string}>)=> {
            const {name, value} = action.payload;
            state[name] = value;
        }
    }
})

export const {changeState} = menuSlice.actions;
export default menuSlice.reducer;
