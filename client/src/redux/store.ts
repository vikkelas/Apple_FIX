import {configureStore} from "@reduxjs/toolkit";
const expireReducer = require('redux-persist-expire');
import rootReducer from "@/redux/rootReducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['menu'],
    transform: [
        expireReducer('menu', {
            expireSeconds: 5,
        })
    ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    devTools: (process.env.DEV_TOOLS_REDUX === "true"),
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck:{
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
})

export const persister = persistStore(store)
export default store
