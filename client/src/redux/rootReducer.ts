import {combineReducers} from "redux";
import {OrderI} from "@/redux/interface/OrderInterface";
import orderSlice from "@/redux/reducers/orderSlice";

export type AppState = {
    order: OrderI;
}

const rootReducer = combineReducers<AppState>({
    order: orderSlice,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
