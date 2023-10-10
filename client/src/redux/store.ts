import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "@/redux/rootReducer";

const store = configureStore({
    devTools: (process.env.DEV_TOOLS_REDUX === "true"),
    reducer: rootReducer
})

export default store
