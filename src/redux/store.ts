import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./slices/TodoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist";

const persistConfig: PersistConfig<any> = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, todoReducer)


export const store = configureStore({
    reducer: {
        todos: persistedReducer
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;