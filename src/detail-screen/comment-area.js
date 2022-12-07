import React, {useEffect} from "react";
import CommentItem from "./comment-item";
import ComposeComment from "./compose-comment";
import {useDispatch, useSelector} from "react-redux";
import {getCommentsByObjectIDThunk} from "../services/comment-thunk";
import {useSearchParams} from "react-router-dom";


const CommentArea = () => {
    const {comments, fetching, updateFlag} = useSelector((state) => state.comments)
    let [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCommentsByObjectIDThunk({
            objID: searchParams.get("coinID"),
            objType: "Coin"
    }))
    },[updateFlag])

    return (
        <section id="comments" className={"border-top vh-100 container justify-content-center pe-0"}>
            <h3>{Object.keys(comments).length} Comments</h3>
            <ComposeComment />
            <div className={"list-group border-top overflow-auto h-100 pe-0"}>
                {
                    comments.map(
                        comment => <CommentItem key={comment.commentID} comment={comment}/>
                    )
                }
            </div>


        </section>

    );

}

export default CommentArea;