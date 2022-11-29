import {createSlice} from "@reduxjs/toolkit";
import coinData from "../data/coin-detail/coin-data";
import {CoinDataThunk} from "../services/detail-thunks";

const initialState = {
    coinData,
    fetching: true
}

const CoinDataReducer = createSlice({
    name: 'CoinDataReducer',
    initialState,
    extraReducers: {
        [CoinDataThunk.pending]: (s, a) => {
            s.fetching = true;
        },
        [CoinDataThunk.rejected]: (s, a) => {
            s.fetching = true;
        },
        [CoinDataThunk.fulfilled]: (state, action) => {
            state.fetching = false;
            state.coinData = action.payload;
        }
    }
})

export default CoinDataReducer.reducer