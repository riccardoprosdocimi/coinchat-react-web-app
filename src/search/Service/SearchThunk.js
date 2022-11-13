import {createAsyncThunk} from "@reduxjs/toolkit";
import {SearchCoin} from "./SearchService";


export const SearchCoinThunk = createAsyncThunk(
    'SearchCoin',
    (query) => SearchCoin(query)
)