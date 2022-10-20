import React from "react";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";
import './index.css';


const SearchScreen = () => {
    return(
        <div className="align-self-center pt-5">
            <SearchBar />
            <SearchResultList />

        </div>


    );

}

export default SearchScreen;