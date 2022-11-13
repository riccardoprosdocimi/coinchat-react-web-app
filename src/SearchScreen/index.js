import React from "react";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";
import {configureStore} from "@reduxjs/toolkit";
import SearchReducer from "./Service/SearchReducer";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        resList: SearchReducer,
    }
})

const SearchScreen = () => {
    return(

        <Provider store={store}>
            <div className="align-self-center pt-5">
                <SearchBar />
                <SearchResultList />

            </div>
        </Provider>


    );

}

export default SearchScreen;