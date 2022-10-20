import React from "react";
import LineChartArea from "./LineChartArea";
import CommentArea from "./CommentArea";
import HeadArea from "./HeadArea";

const DetailScreen = () => {
    return(

        <div className={"container"}>
            <HeadArea />
            <LineChartArea />
            <CommentArea />
        </div>
    )

}

export default DetailScreen;