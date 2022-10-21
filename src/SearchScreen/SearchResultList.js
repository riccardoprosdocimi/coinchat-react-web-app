import React from "react";
import searchresult from "./searchresult.json"
import SearchResultItem from "./SearchResultItem";


const SearchResultList = () => {
    return(
        <section id="search-result" className="container">
            <div className="list-group">
                {
                    searchresult.map(
                        result => <SearchResultItem key={result.searchID} result={result} />
                    )
                }
            </div>
        </section>
    );
}

export default SearchResultList;