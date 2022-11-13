import React from "react";
import SearchResultItem from "./search-result-item";
import {useSelector} from "react-redux";


const SearchResultList = ({ resList }) => {
    // const {resList} = useSelector((state) => {
    //     return state.resList;
    // });
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