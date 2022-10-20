import React from "react";

const SearchBar = () => {
    return(
        <div id="main-search-bar" className="mb-5">
            <div className="container text-center">
                <h2>Explore the cryptoeconomy</h2>
            </div>
            <div className="container pt-3 col-4">
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search"/>
                    <button type="button" className="btn wd-btn-lowlight ms-1 rounded">search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;