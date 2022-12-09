import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteGivenCommentThunk} from "../services/comment-thunk";
import Moment from 'react-moment';
import currentUser from "../users/current-user";

const CommentItem = ({comment}) => {
    const {currentUser} = useSelector(state => state.users);
    const {userReactions} = useSelector(state => state.comments)
    let currentReactionType = 0;  // initially neutral reaction
    for (const thisRC of userReactions) {
        if (thisRC.commentID === comment._id) {
            currentReactionType = thisRC.reactionType;
            break;
        }
    }

    const dispatch = useDispatch();
    function deleteTuitHandler(commentID) {
        console.log("delete me");
        dispatch(deleteGivenCommentThunk(commentID));
    }

    return(
        <div className="d-flex flex-column border-bottom mt-2">
            <div className="d-flex pb-2">
                <div className="">
                    <a href="/#"><img className="wd-rounded-image" src={`/images/p${comment.authorID.avatar}.jpg`}
                                     alt="avatar" /></a>
                </div>
                <div className="mt-2 ms-3">
                    <h6 className="">{comment.authorID.firstName} {comment.authorID.lastName}</h6>
                </div>
                <div id={"delete button"} className={"ms-auto"}>
                    {currentUser && (currentUser.role === "ADMIN" || currentUser._id === comment.authorID)
                        &&
                        <i className="bi bi-trash text-danger"
                           onClick={() => deleteTuitHandler(comment._id)}></i>
                    }
                </div>
            </div>
            <div className="">

                <p>{comment.detailContent}</p>
                <ul className="list-unstyled list-inline d-flex justify-content-between">
                    <li><i className="fa fa-calendar wd-app-color-yellow"></i>  <Moment fromNow ago>{comment.createdAt}</Moment></li>
                    <li>
                        <button type={"button"} className={"btn btn-link pt-0 ps-0 text-dark"}>
                        <i className="fa fa-thumbs-up "></i></button> {comment.likes}
                    </li>
                    <li>
                        <button type={"button"} className={"btn btn-link pt-0 ps-0 text-dark"}>
                        <i className="fa fa-thumbs-down "></i></button> {comment.dislikes}
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default CommentItem;