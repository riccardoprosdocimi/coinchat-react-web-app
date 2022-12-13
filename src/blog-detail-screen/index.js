import {Link, useNavigate, useSearchParams} from "react-router-dom";
import CommentArea from "../detail-screen/comment-area";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteABlogThunk, findBlogByBlogIDThunk} from "../services/blog-thunk";
import {deleteGivenCommentThunk} from "../services/comment-thunk";
import {COINGECKO_API_BASE_URL} from "../util/global-variables";


const BlogScreen = () => {
    const {currentUser} = useSelector(state => state.users);
    const {curBlog, fetching} = useSelector(state => state.blogs);
    const {comments} = useSelector((state) => state.comments)

    let [searchParams] = useSearchParams();
    const blogID = searchParams.get("blogID");

    const [isLoaded, setIsLoaded] = useState(false);
    const [coin, setCoin] = useState(null);

    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(findBlogByBlogIDThunk(blogID));
        },
        []
    )

    // fetch the coin data if curBlog is not null, or curBlog changed
    useEffect(
        () => {
            curBlog && fetch(`${COINGECKO_API_BASE_URL}/${curBlog.coinID}`)
                .then(res => res.json())
                .then((result) => {
                        setIsLoaded(true);
                        setCoin(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        console.log(error)
                    }
                )
        },
        [curBlog]
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

    const percentFormat = new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })




    if (fetching) {
        return (
            <h1>Loading....</h1>
        )
    }
    return(
        <div className="d-flex mt-3">
            <div className={"col-9 ps-5 pe-3 border-end d-flex justify-content-center"}>
                <div className={"col-8"}>
                    <h1 className={"mb-4"}>{curBlog.title}</h1>
                    <div id={"additional information"} className={"d-flex mb-2"}>
                        <Link to={`/profile/${curBlog.authorID._id}`} className={""}>
                            <img className="wd-rounded-image" width={"32px"} height={"32px"} src={`/images/p${curBlog.authorID.avatar}.jpg`}
                                 alt="avatar" />
                        </Link>
                        <div className="mt-1 ms-2">
                            <h6 className="">{curBlog.authorID.firstName} {curBlog.authorID.lastName}</h6>
                        </div>
                        {
                            isLoaded &&
                            <div className={"ms-auto d-flex"}>
                                <img className={"me-1"} src={coin.image.large} width={"32px"} height={"32px"} alt={"The icon of this coin"}/>
                                <div className={"mt-1"}>
                                    {coin.symbol.toUpperCase()}
                                </div>
                                <div className={`mt-1 ms-3 ${coin.market_data.price_change_percentage_24h > 0 ?
                                    'text-success' : ''
                                    || coin.market_data.price_change_percentage_24h < 0 ?
                                        'text-danger' : ''
                                        || coin.percentChange === 0 ?
                                            'text-secondary' : ''}`}>
                                    {coin.market_data.price_change_percentage_24h > 0 ? '+' : ''}
                                    {percentFormat.format(coin.market_data.price_change_percentage_24h / 100)}
                                </div>
                            </div>
                        }
                    </div>
                    <p>{curBlog.content}</p>
                    {
                        currentUser && (currentUser.role === "ADMIN" || currentUser._id === curBlog.authorID._id)
                        &&
                        <button type={"submit"} className={"btn btn-danger"}
                                onClick={() => deleteBlogHandler(curBlog._id)}>
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