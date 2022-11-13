import React from "react";
import {Link} from "react-router-dom";

const SearchResultItem = ({result}) => {
    return(
        <Link to={"/detail"} className="list-group-item list-group-item-action card mb-2">
            <h5 className="card-header"><img src={result.large} width={"24px"} alt={"The icon of this coin"}/> {result.name}</h5>
            <div className="card-body">
                <h5 className="card-title">{result.market_cap_rank}</h5>
                <p className="card-text">Coin info placeholder</p>
            </div>
        </Link>

    );

}

export default SearchResultItem;