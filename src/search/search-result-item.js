import React, {useState} from "react";
import {Link} from "react-router-dom";

const SearchResultItem = ({result}) => {
    const [watchState, setWatchState] = useState(false)

    const addWatchlistItem = (event) => {
        event.preventDefault();
        //TODO: change uid to current user uid
        setWatchState(true);
    }

    function removeWatchlistItem(event) {
        event.preventDefault();
        // TODO:
        setWatchState(false);
    }

    return(
        <Link to={{ pathname: '../detail',
                    search: "coinID="+result.id}}
              className="list-group-item list-group-item-action card mb-2">
            <h5 className="card-header"><img src={result.large} width={"24px"} alt={"The icon of this coin"}/> {result.name}</h5>
            <div className="card-body d-flex">
                <h5 className="card-title">M.Cap Rank: {result.market_cap_rank}</h5>
                {
                    !watchState ?

                        <button onClick={(e) => addWatchlistItem(e)}
                                className="btn btn-sm ms-auto wd-btn-style">
                            Add Watchlist
                        </button>
                        : <button onClick={(e) => removeWatchlistItem(e)}
                                  className="btn btn-sm ms-auto wd-btn-style-negative">
                            Remove Watchlist
                        </button>
                }
            </div>
        </Link>

    );

}

export default SearchResultItem;