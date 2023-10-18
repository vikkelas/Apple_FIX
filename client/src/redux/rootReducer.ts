import {combineReducers} from "redux";
import {OrderI} from "@/redux/interface/OrderInterface";
import orderSlice from "@/redux/reducers/orderSlice";
import {MenuRespI} from "@/redux/interface/MenuInterface";
import menuSlice from "@/redux/reducers/menuSlice";

export type AppState = {
    order: OrderI;
    menu: MenuRespI;
}

const rootReducer = combineReducers<AppState>({
    order: orderSlice,
    menu: menuSlice
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
