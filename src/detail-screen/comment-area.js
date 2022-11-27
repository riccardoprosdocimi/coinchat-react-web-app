import React from "react";
import CommentItem from "./comment-item";
import comments from "./comments.json"


const CommentArea = ({curUser = {
                           avatar: "profile-picture.jpg",
                           userName: "Coin Dude"
                       },
                     coinID
}
) => {

    return(
        <section id="comments" className="border-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-9">
                        <form className="pt-3">
                            <fieldset>
                                <div className="row">
                                    <div className="col-sm-3 col-lg-2 ">
                                        <div className="d-flex justify-content-center">
                                            <img className="rounded-circle"
                                                 src={`/images/${curUser.avatar}`} alt="myAvatar"
                                                 height={90} width={90} />
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <h6 className="">{curUser.userName}</h6>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-9 col-lg-10">
                                        <textarea cols="100" rows="3" className="form-control me-2 border" id="message"
                                                  placeholder="Your Comment" required=""></textarea>
                                        <br />
                                            <div className="row justify-content-end">
                                                <div className="col-2 d-flex flex-column-reverse">
                                                    <button type="submit"
                                                            className="btn wd-btn-highlight active">Submit
                                                    </button>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>

                        <hr/>
                        <h3>{Object.keys(comments).length} Comments</h3>
                        {
                            comments.map(
                                comment => <CommentItem key={comment.commentID} comment={comment} />
                            )
                        }

                    </div>
                </div>
            </div>
        </section>

);

}

export default CommentArea;