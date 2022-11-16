import React, {useEffect} from "react";
import LineChartArea from "./line-chart-area";
import CommentArea from "./comment-area";
import HeadArea from "./head-area";
import {useSearchParams} from "react-router-dom";
import {CoinDataThunk, CoinMCThunk} from "./service/detail-thunks";
import {useDispatch} from "react-redux";
import AboutArea from "./about-area";

const DetailScreen = () => {
    let [searchParams] = useSearchParams();
    const coinID = searchParams.get("coinID");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(CoinDataThunk(searchParams.get("coinID")));
        dispatch(CoinMCThunk(searchParams.get("coinID")))
    },[dispatch, searchParams])

    if (coinID === null || coinID.length === 0) {
        return (
            <h1>This is an Easter Egg!</h1>
        )
    }

    return(
        <div className="container">
            <HeadArea />
            <LineChartArea />
            <AboutArea />
            <CommentArea coinID={coinID}/>
        </div>
    );
}
export default DetailScreen;