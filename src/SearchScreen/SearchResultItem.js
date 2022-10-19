import React from "react";

const SearchResultItem = (result) => {
    return(
        <div className="list-group-item list-group-item-action card mb-2">
            <h5 className="card-header"><img src={`/imags/${result.coinIcon}`} alt={"The icon of this coin"}/> BitCoin</h5>
            <div className="card-body">
                <h5 className="card-title">{result.coinPrice}</h5>
                <p className="card-text">{result.coinInfo}</p>
            </div>
        </div>

    );

}

export default SearchResultItem;