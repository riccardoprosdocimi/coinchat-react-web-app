import React from "react";
import {useSelector} from "react-redux";


const HeadArea = () => {
    const {coinData, fetching} = useSelector((state) => {
        return state.coinData;
    });

    return(
        fetching?
            <h4>Loading</h4>
            :
        <div className="d-flex justify-content-center py-4 row">
            <div className="container col-8">
                <h3 className={"float-start"}><img src={coinData.image.large} width={"36px"} alt={"The icon of this coin"}/> {coinData.name}  {coinData.symbol}</h3>
                <button type="submit" className="btn ms-3 float-start wd-btn-highlight">Add Watchlist</button>
            </div>
            <div className={"float-end"}></div>
        </div>

    );
}

export default HeadArea;