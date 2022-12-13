import {useNavigate, useSearchParams} from "react-router-dom";
import CommentArea from "../detail-screen/comment-area";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteABlogThunk, findBlogByBlogIDThunk} from "../services/blog-thunk";
import {deleteGivenCommentThunk} from "../services/comment-thunk";


const BlogScreen = () => {
    const {currentUser} = useSelector(state => state.users);
    const {blogList, fetching} = useSelector(state => state.blogs);
    const {comments} = useSelector((state) => state.comments)

    let [searchParams] = useSearchParams();
    const blogID = searchParams.get("blogID");

    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(findBlogByBlogIDThunk(blogID))
        },
        []
    )

    const navigate = useNavigate();
    function deleteBlogHandler(blogID) {
        // first delete all related comments
        for (const cm of comments) {
            dispatch(deleteGivenCommentThunk(cm._id))
        }
        dispatch(deleteABlogThunk(blogID))
        navigate('/bloglist');
    }

    if (fetching) {
        return (
            <h1>Loading....</h1>
        )
    }
    return(
        <div className="d-flex mt-3">
            <div className={"col-9 ps-5 pe-4 border-end d-flex justify-content-center"}>
                <div className={"col-10"}>
                    <h1>{blogList[0].title}</h1>
                    <p>{blogList[0].content}</p>
                    {
                        currentUser && (currentUser.role === "ADMIN" || currentUser._id === blogList[0].authorID._id)
                        &&
                        <button type={"submit"} className={"btn btn-danger"}
                                onClick={() => deleteBlogHandler(blogList[0]._id)}>
                            Delete Blog
                        </button>
                    }
                </div>

            </div>
            <div className={"w-100"}>
                <CommentArea objectType={"Blog"}/>
            </div>

        </div>

    )


}

export default BlogScreen;