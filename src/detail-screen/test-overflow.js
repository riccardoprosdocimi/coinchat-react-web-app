import React from "react";
import CommentItem from "./comment-item";
import comments from "./comments.json"

const TestOverflow = () => {
    return(
        <div className="d-flex" id="wrapper">
            <div className="vh-100" id="sidebar-wrapper">
                <div className="list-group list-group-flush overflow-auto h-100">
                    {
                        comments.map(
                            comment => <CommentItem key={comment.commentID} comment={comment} />
                        )
                    }

                </div>
            </div>
        </div>

    )
}

export default TestOverflow;