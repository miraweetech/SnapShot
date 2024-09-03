import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    images: []
}

const ImageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImages: (state, action) => {
            state.images = action.payload
        }
    }
})

export const {setImages} = ImageSlice.actions

export default ImageSlice.reducer