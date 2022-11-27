import React from "react";
import SearchBar from "./search-bar";
import {configureStore} from "@reduxjs/toolkit";
import SearchReducer from "./service/SearchReducer";
import {Provider} from "react-redux";
import SearchResultPagination from "./search-result-pagination";

const search_store = configureStore({
    reducer: {
        resList: SearchReducer,
    }
})

const SearchScreen = () => {
    return(

        <Provider store={search_store}>
            <div className="align-self-center pt-5">
                <SearchBar />
                <SearchResultPagination itemsPerPage={5}/>

            </div>
        </Provider>


    );

}

export default SearchScreen;