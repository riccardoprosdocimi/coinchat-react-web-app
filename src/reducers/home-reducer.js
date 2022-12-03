import {createSlice} from "@reduxjs/toolkit";
import {getTrendingCoinsThunk} from "../services/home-thunk";

const HomeReducer  = createSlice ({
    name: "coins",
    initialState: [],
    extraReducers: {
        [getTrendingCoinsThunk.fulfilled]: (state, action) => {
            return state = action.payload
        }
    }
})
export default HomeReducer.reducer;