import {createAsyncThunk} from "@reduxjs/toolkit";
import {getCoinData, getCoinMC} from "./detail-service";


export const CoinDataThunk = createAsyncThunk(
    'getCoinData',
    (coinID) => getCoinData(coinID)
)


export const CoinMCThunk = createAsyncThunk(
    'getCoinMC',
    (coinID) => getCoinMC(coinID)
)