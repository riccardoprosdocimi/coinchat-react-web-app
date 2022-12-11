import React from "react";
import SearchBar from "./search-bar";
import SearchResultPagination from "./search-result-pagination";


const Search = () => {
    return(
            <div className="align-self-center pt-5">
                <SearchBar />
                <SearchResultPagination itemsPerPage={5}/>

            </div>
    );

}

export default Search;