import {combineReducers} from "redux";
import deviceSlice from "@/redux/reducers/deviceSlice";
import {DeviceI} from "@/redux/interface/DeviceInterface";

export type AppState = {
    device: DeviceI;
}

const rootReducer = combineReducers<AppState>({
    device: deviceSlice,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
