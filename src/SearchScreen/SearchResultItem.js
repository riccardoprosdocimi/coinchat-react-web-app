import React from "react";
import {Link} from "react-router-dom";

const SearchResultItem = ({result}) => {
    return(
        <Link to={"/detail"} className="list-group-item list-group-item-action card mb-2">
            <h5 className="card-header"><img src={`/images/${result.coinIcon}`} width={"24px"} alt={"The icon of this coin"}/> {result.coinName}</h5>
            <div className="card-body">
                <h5 className="card-title">{result.coinPrice}</h5>
                <p className="card-text">{result.coinInfo}</p>
            </div>
        </Link>

    );

}

export default SearchResultItem;