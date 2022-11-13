import React from "react";
import SearchResultItem from "./SearchResultItem";
import {useSelector} from "react-redux";


const SearchResultList = () => {
    const {resList, Searching} = useSelector((state) => {
        return state.resList;
    });
    return(
        <section id="search-result" className="container">
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