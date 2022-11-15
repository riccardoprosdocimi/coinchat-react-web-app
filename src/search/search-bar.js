import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {SearchCoinThunk} from "./service/SearchThunk";
import {useSearchParams} from "react-router-dom";

const SearchBar = () => {
    let [searchParams, setSearchParams] = useSearchParams({query: ""});
    const [searchTerm, setSearchTerm] = useState('')

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(SearchCoinThunk(searchParams.get("query")));
        setSearchTerm(searchParams.get("query"));
    }, [searchParams.get("query")])

    return(
        <div id="main-search-bar" className="mb-5">
            <div className="container text-center">
                <h2>Explore the cryptoeconomy</h2>
            </div>
            <div className="container pt-3 col-4">
                <div className="input-group">
                    <input
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setSearchParams({ 'query': searchTerm })
                            }
                        }}
                        type="search" className="form-control rounded" placeholder={"Search"}
                           value={searchTerm} onChange={(e) => {
                                setSearchTerm(e.target.value)
                           }}/>
                    <button

                        onClick={() => {
                            setSearchParams({ 'query': searchTerm })
                            // dispatch(SearchCoinThunk(searchTerm))
                        }} type="button" className="btn wd-btn-lowlight ms-1 rounded"
                    >Search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;