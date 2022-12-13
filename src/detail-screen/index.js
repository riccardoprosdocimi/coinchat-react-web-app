import React, {useEffect} from "react";
import LineChartArea from "./line-chart-area";
import CommentArea from "./comment-area";
import HeadArea from "./head-area";
import {useSearchParams} from "react-router-dom";
import {CoinDataThunk} from "../services/detail-thunks";
import {useDispatch} from "react-redux";
import AboutArea from "./about-area";

const Detail = () => {
    let [searchParams] = useSearchParams();
    const coinID = searchParams.get("coinID");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CoinDataThunk(searchParams.get("coinID")));
    }, [dispatch, searchParams])

    if (coinID === null || coinID.length === 0) {
        return (
            <h1>This is an Easter Egg!</h1>
        )
    }

    return (

        <div className="d-flex">
            <div className={"col-9 ps-5 pe-4 border-end d-flex justify-content-center"}>
                <div className={"col-10"}>
                    <HeadArea/>
                    <LineChartArea/>
                    <AboutArea/>
                </div>


            </div>
            <div className={"w-100"}>
                <CommentArea objectType={"Coin"}/>
            </div>
        </div>

    );
}
export default Detail;