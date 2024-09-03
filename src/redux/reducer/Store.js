import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import ImageSlice from "./ImageSlice";


export const Store = configureStore({
    reducer: {
        search: SearchSlice,
        image: ImageSlice
    }
})