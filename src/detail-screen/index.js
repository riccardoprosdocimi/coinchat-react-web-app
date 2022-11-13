import React from "react";
import LineChartArea from "./line-chart-area";
import CommentArea from "./comment-area";
import HeadArea from "./head-area";

const DetailScreen = () => {
    return(
        <div className="container">
            <HeadArea />
            <LineChartArea />
            <CommentArea />
        </div>
    );
}
export default DetailScreen;