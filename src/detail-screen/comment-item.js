import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    createNewUCRecordThunk,
    deleteGivenCommentThunk,
    deleteUCRecordThunk,
    updateUCRecordThunk
} from "../services/comment-thunk";
import Moment from 'react-moment';
import {Link} from "react-router-dom";

const CommentItem = ({comment}) => {

    const {currentUser} = useSelector(state => state.users);
    const {userReactions} = useSelector(state => state.comments)
    let currentReaction = null;
    let currentReactionType = 0;  // initially neutral reaction, if this user already react to the comment, it would be 1 or -1
    for (const thisRC of userReactions) {
        if (thisRC.commentID === comment._id) {
            currentReaction = thisRC;
            currentReactionType = thisRC.reactionType;
            break;
        }
    }

    const dispatch = useDispatch();
    function deleteCommentHandler(commentID) {
        console.log("delete me");
        dispatch(deleteGivenCommentThunk(commentID));
    }

    function thumbsUpClickHandler() {
        if (!currentUser) {
            alert("Only registered member could react to a comment")
            return;
        }
        if (currentReactionType === 1) {
            // delete reaction
            dispatch(deleteUCRecordThunk(currentReaction))
        } else if (currentReactionType === 0) {
            const newUCRecord = {
                userID : currentUser._id,
                commentID : comment._id,
                reactionType : 1
            }
            // create a new reaction
            dispatch(createNewUCRecordThunk(newUCRecord))
        } else if (currentReactionType === -1) {
            // update reaction
            dispatch(updateUCRecordThunk(currentReaction))
        }
    }

    function thumbsDownClickHandler(){
        if (!currentUser) {
            alert("Only registered member could react to a comment")
            return;
        }
        if (currentReactionType === -1) {
            // delete reaction
            dispatch(deleteUCRecordThunk(currentReaction))
        } else if (currentReactionType === 0) {
            const newUCRecord = {
                userID : currentUser._id,
                commentID : comment._id,
                reactionType : -1
            }
            // create a new reaction
            dispatch(createNewUCRecordThunk(newUCRecord))
        } else if (currentReactionType === 1) {
            // update reaction
            dispatch(updateUCRecordThunk(currentReaction))
        }
    }

    return(
        <div className="d-flex flex-column border-bottom mt-2">
            <div className="d-flex pb-2">
                <Link to={`/profile/${comment.authorID._id}`}>
                    <div className="">
                        <a href="/#"><img className="wd-rounded-image" src={`/images/p${comment.authorID.avatar}.jpg`}
                                         alt="avatar" /></a>
                    </div>
                </Link>
                <div className="mt-2 ms-3">
                    <h6 className="">{comment.authorID.firstName} {comment.authorID.lastName}</h6>
                </div>
                <div id={"delete button"} className={"ms-auto"}>
                    {currentUser && (currentUser.role === "ADMIN" || currentUser._id === comment.authorID)
                        &&
                        <i className="bi bi-trash text-danger"
                           onClick={() => deleteCommentHandler(comment._id)}></i>
                    }
                </div>
            </div>
            <div className="">

                <p>{comment.detailContent}</p>
                <ul className="list-unstyled list-inline d-flex justify-content-between">
                    <li><i className="fa fa-calendar wd-app-color-yellow"></i>  <Moment fromNow ago>{comment.createdAt}</Moment></li>
                    <li>
                        <button type={"button"} className={"btn btn-link pt-0 ps-0 text-dark"} onClick={() => thumbsUpClickHandler()}>
                            {
                            currentReactionType === 1
                                ? <i className="fa fa-thumbs-up wd-app-color-yellow"></i>
                                : <i className="fa fa-thumbs-up "></i>
                            }
                        </button>
                    </li>
                    <li>{
                        comment.likes - comment.dislikes
                    }</li>
                    <li>
                        <button type={"button"} className={"btn btn-link pt-0 ps-0 text-dark"} onClick={() => thumbsDownClickHandler()}>
                            {
                                currentReactionType === -1
                                    ? <i className="fa fa-thumbs-down text-danger"></i>
                                    : <i className="fa fa-thumbs-down "></i>
                            }
                        </button>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default CommentItem;