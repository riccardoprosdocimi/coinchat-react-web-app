import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addWatchlistThunk,} from "../services/watchlist-thunks";


const HeadArea = () => {
    const {coinData, fetching} = useSelector((state) => {
        return state.coinData;
    });

    const dispatch = useDispatch()
    const addWatchlistItem = () => {
        //TODO: change uid to current user uid
        const watchlistItem = {
            uid: "1",
            coinID: coinData.id
        }
        dispatch(addWatchlistThunk(watchlistItem))
        setWatchState(true);
    }

    function removeWatchlistItem() {
        // TODO:
        setWatchState(false);
    }

    // TODO: get watch state from database
    const [watchState, setWatchState] = useState(false)



    return(
        fetching?
            <h4>Loading</h4>
            :
        <div className="d-flex justify-content-center pt-4 row">
            <div className="container col-8">
                <h3 className={"float-start"}><img src={coinData.image.large} width={"36px"} alt={"The icon of this coin"}/> {coinData.name}  {coinData.symbol}</h3>
                {
                    !watchState ?

                        <button onClick={() => addWatchlistItem()}
                                className="btn ms-3 float-start wd-btn-style">
                            Add Watchlist
                        </button>
                        : <button onClick={() => removeWatchlistItem()}
                            className="btn ms-3 float-start wd-btn-style-negative">
                        Remove Watchlist
                        </button>
                }

            </div>
            <div className={"float-end"}></div>
        </div>

    );
}

export default HeadArea;