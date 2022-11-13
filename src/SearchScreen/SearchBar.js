import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {SearchCoinThunk} from "./Service/SearchThunk";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('Avatar')

    const dispatch = useDispatch();
    useEffect(() => {dispatch(SearchCoinThunk(searchTerm))}, [searchTerm, dispatch])

    return(
        <div id="main-search-bar" className="mb-5">
            <div className="container text-center">
                <h2>Explore the cryptoeconomy</h2>
            </div>
            <div className="container pt-3 col-4">
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" onChange={(e) => {
                        setSearchTerm(e.target.value)}}/>
                    <button onClick={() => {
                        dispatch(SearchCoinThunk(searchTerm))
                    }} type="button" className="btn wd-btn-lowlight ms-1 rounded">Search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;