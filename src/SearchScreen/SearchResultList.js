import React from "react";
import SearchResultItem from "./SearchResultItem";
import {useSelector} from "react-redux";


const SearchResultList = () => {
    const {searchresult, searching} = useSelector((state) => state.resList);
    console.log(searching);
    return(
        <section id="search-result" className="container">
            <div className="list-group">
                {
                    searchresult.map(
                        result => <SearchResultItem key={result.id} result={result} />
                    )
                }
            </div>
        </section>
    );
}

export default SearchResultList;