import React from "react";


const CommentItem = ({comment}) => {
    return(
        <div className="row">
            <div className="col-2">
                <div className="d-flex justify-content-center">
                    <a href="/#"><img className="rounded-circle" src={comment.userAvatar}
                                     alt="avatar" height="90px" /></a>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <h6 className="">{comment.userName}</h6>
                </div>
            </div>
            <div className="col-10">

                <p>{comment.commentContent}</p>
                <ul className="list-unstyled list-inline d-flex justify-content-between">
                    <li><i className="fa fa-calendar wd-theme-yellow"></i> {comment.commentDate}</li>
                    <li><a href="/#"><i className="fa fa-thumbs-up wd-theme-yellow"></i></a> {comment.commentThumbUp}</li>
                    <li><a href="/#"><i className="fa-solid fa-reply wd-theme-yellow"></i></a> {comment.commentReply}</li>
                </ul>
            </div>
            <hr />
        </div>

    );
}

export default CommentItem;