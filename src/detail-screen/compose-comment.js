import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createNewCommentThunk} from "../services/comment-thunk";


const ComposeComment = ({
                         curUser = {
                             avatar: "profile-picture.jpg",
                             userName: "CoinDude",
                             userID: "6389244836258a0c5b70090e"
                         }
                     }) => {

    const {coinData} = useSelector((state) => {
        return state.coinData;
    });

    let [myComment, setMyComment] = useState('');

    const dispatch = useDispatch();
    function CommentSubmitClickHandler() {
        const newComment = {
            authorID: curUser.userID,
            objectID: coinData.id,
            objectType: "Coin",
            detailContent: myComment
        }
        dispatch(createNewCommentThunk(newComment));
        setMyComment("");
    }


    return (
            <fieldset className={"py-2"}>
                <div className="d-flex flex-column">
                    <div className="d-flex pb-2">
                        <div className="">
                            <img className="wd-rounded-image"
                                 src={`/images/${curUser.avatar}`} alt="myAvatar"
                            />
                        </div>
                        <div className="mt-2 ms-3">
                            <h6 align="center" className="">{curUser.userName}</h6>
                        </div>
                    </div>
                    <div className="">
                        <textarea cols="100" rows="3" className="form-control me-2 border wd-textarea-resize-none" id="coin-detail-comment"
                                  placeholder="Your Comment" value={myComment}
                                  onChange={(event) => setMyComment(event.target.value)}></textarea>
                        <div className="d-flex flex-column-reverse mt-2">
                            <button type="submit"
                                    className="btn wd-btn-style" onClick={CommentSubmitClickHandler}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </fieldset>

    )

}

export default ComposeComment;