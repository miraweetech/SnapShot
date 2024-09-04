import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import ImageSlice from "./ImageSlice";
import ContainerSlice from "./ContainerSlice";


export const Store = configureStore({
    reducer: {
        search: SearchSlice,
        image: ImageSlice,
        photo: ContainerSlice
    }
})