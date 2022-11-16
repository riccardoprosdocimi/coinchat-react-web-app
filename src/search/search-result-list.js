import React from "react";
import SearchResultItem from "./search-result-item";


const SearchResultList = ({ resList }) => {

    return(
        <section id="search-result" className="container col-6">
            <div className="list-group">
                {
                    resList.map(
                        result => <SearchResultItem key={result.id} result={result} />
                    )
                }
            </div>
        </section>
    );
}

export default SearchResultList;