import {useSearchParams} from "react-router-dom";
import CommentArea from "../detail-screen/comment-area";
import React from "react";


const BlogScreen = () => {

    let [searchParams] = useSearchParams();
    const blogID = searchParams.get("blogID");

    return(
        <div className="d-flex">
            <div className={"col-9 ps-5 pe-4 border-end d-flex justify-content-center"}>
                <div className={"col-10"}>
                    <h1>Hello, it is a blog!</h1>
                </div>

            </div>
            <div className={"w-100"}>
                <CommentArea objectType={"Blog"}/>
            </div>
        </div>

    )


}

export default BlogScreen;