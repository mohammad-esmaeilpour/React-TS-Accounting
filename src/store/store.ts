import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import languageReducer from "./slice/language-slice";
import dataReducer from "./slice/data-slice";
import userReducer from "./slice/user-slice";
import factorProductReducer from "./slice/factorProducts-slice";
import productCountReducer from "./slice/productsCount-slice";

export const store = configureStore({
  reducer: {
    languageReducer,
    dataReducer,
    userReducer,
    factorProductReducer,
    productCountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
