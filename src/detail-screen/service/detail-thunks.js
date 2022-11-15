import {createAsyncThunk} from "@reduxjs/toolkit";
import {getCoinData} from "./detail-service";


export const CoinDataThunk = createAsyncThunk(
    'getCoinData',
    (coinID) => getCoinData(coinID)
)