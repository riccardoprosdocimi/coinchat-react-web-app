import {createSlice} from "@reduxjs/toolkit";
import resList from "../../data/search/search-result";
import {SearchCoinThunk} from "./SearchThunk";

// ready for interact with database

const initialState = {
    resList,
    Searching: false
}


const SearchReducer = createSlice({
    name: 'SearchReducer',
    initialState,
    extraReducers: {
        [SearchCoinThunk.fulfilled]: (state, action) => {
            state.resList = action.payload
        }
    }
})

export default SearchReducer.reducer