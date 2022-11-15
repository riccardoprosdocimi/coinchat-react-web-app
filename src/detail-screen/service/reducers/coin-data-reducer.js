import {createSlice} from "@reduxjs/toolkit";
import coinData from "../../../data/coin-detail/coin-data";
import {CoinDataThunk} from "../detail-thunks";

const initialState = {
    coinData,
    fetching: true
}

const CoinDataReducer = createSlice({
    name: 'SearchReducer',
    initialState,
    extraReducers: {
        [CoinDataThunk.pending]: (s, a) => {
            console.log("pending");
            s.fetching = true;
        },
        [CoinDataThunk.rejected]: (s, a) => {
            console.log("rejected")
            s.fetching = true;
        },
        [CoinDataThunk.fulfilled]: (state, action) => {
            console.log("extraReducer");
            state.fetching = false;
            state.coinData = action.payload;
        }
    }
})

export default CoinDataReducer.reducer