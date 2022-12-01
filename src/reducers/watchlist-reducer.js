import {createSlice} from "@reduxjs/toolkit";
import {
    addWatchlistThunk,
    findWatchlistThunk,
    removeWatchlistThunk
} from "../services/watchlist-thunks";

const initialState = {
    watchlist: [],
    loading: false
}

const watchlistSlice = createSlice(
    {
        name: 'watchlist',
        initialState,
        extraReducers: {
            [findWatchlistThunk.pending]:
                (state) => {
                    state.loading = true
                    state.watchlist = []
                },
            [findWatchlistThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    state.watchlist = payload
                },
            [findWatchlistThunk.rejected]:
                (state) => {
                    state.loading = false
                },
            [addWatchlistThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    state.watchlist.push(payload)
                },
            [removeWatchlistThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    state.watchlist = state.watchlist
                        .filter(item => item._id !== payload)
                }
        }
    }
)
export default watchlistSlice.reducer