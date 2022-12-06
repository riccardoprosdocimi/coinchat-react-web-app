import React from "react";


const CommentItem = ({comment}) => {
    return(
        <div className="d-flex flex-column border-bottom mt-2">
            <div className="d-flex pb-2">
                <div className="">
                    <a href="/#"><img className="wd-rounded-image" src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                     alt="avatar" /></a>
                </div>
                <div className="mt-2 ms-3">
                    <h6 className="">John Doe</h6>
                </div>
            </div>
            <div className="">

                <p>{comment.detailContent}</p>
                <ul className="list-unstyled list-inline d-flex justify-content-between">
                    <li><i className="fa fa-calendar"></i> {comment.createdAt}</li>
                    <li><button type={"button"} className={"btn btn-link pt-0 ps-0 text-dark"}>
                        <i className="fa fa-thumbs-up "></i></button> {comment.likes}</li>
                    <li><button type={"button"} className={"btn btn-link pt-0 ps-0 text-dark"}>
                        <i className="fa fa-thumbs-down "></i></button> {comment.dislikes}</li>
                </ul>
            </div>
        </div>

    );
}

export default CommentItem;