import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    searchQuery: '',
    items: ['Mountain', 'Beaches', 'Birds', 'Food', 'Desert', 'Forest', 'River', 'girl']
}

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        }
    }
})

export const {setSearchQuery} = SearchSlice.actions
export default SearchSlice.reducer