import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import {useDispatch} from "react-redux";
import {deleteGivenCommentThunk} from "../../services/comment-thunk";
const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3/coins'

// const moneyFormat = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
// })

const PostListItem = ({comment, allowedToRemove}) => {
    const dispatch = useDispatch()

    // TODO: Connect to an onClick event of the button
    const deleteComment = (commentID) =>
        dispatch(deleteGivenCommentThunk(commentID))

    // Source: https://reactjs.org/docs/faq-ajax.html
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [coin, setCoin] = useState(null);
    // const [previousCoin, setPreviousCoin] = useState(null)
    useEffect(() => {
        fetch(`${COINGECKO_API_BASE_URL}/${comment.objectID}`)
            .then(res => res.json())
            .then((result) => {
                      setIsLoaded(true);
                      setCoin(result);
                  },
                  // Note: it's important to handle errors here
                  // instead of a catch() block so that we don't swallow
                  // exceptions from actual bugs in components.
                  (error) => {
                      setIsLoaded(true);
                      setError(error);
                  }
            )
        /*
        Used to fetch snapshot of coin when comment was made.
         */
        // const date = moment(comment.createdAt).format('DD-MM-yyyy')
        // fetch(`${COINGECKO_API_BASE_URL}/${comment.objectID}/history?date=${date}`)
        //     .then(res => res.json())
        //     .then((result) => {
        //               setPreviousCoin(result);
        //           },
        //           // Note: it's important to handle errors here
        //           // instead of a catch() block so that we don't swallow
        //           // exceptions from actual bugs in components.
        //           (error) => {
        //               setError(error);
        //           }
        //     )
    }, [comment.objectID])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
    return(
        <li className='list-group-item'>
            <div className='row'>
                <div className='col'>
                    <Link to={`/detail?coinID=${comment.objectID}`} style={{textDecoration: 'none', color: 'black'}}>
                        <span>
                            <img className={'pe-2 pb-2'}
                                 src={coin.image.thumb} alt=""/>
                        </span>
                        <span className='fs-4 pt-1'>
                            {coin.name}
                        </span>
                        <i className='bi bi-dot text-secondary'></i>
                        <span className='text-secondary'>
                            {moment(comment.createdAt).fromNow()}
                        </span>
                    </Link>
                </div>
                {
                    allowedToRemove &&
                    <div className='col'>
                        <button className='btn btn-sm btn-outline-danger float-end'
                                onClick={() => deleteComment(comment._id)}>
                            <i className={'bi bi-x-lg'}></i>
                        </button>
                    </div>
                }
            </div>
            <p className='pt-2'>
                {comment.detailContent}
            </p>
            {/*Prints price change since comment*/}
            {/*<p style={{fontSize: '3'}}>*/}
            {/*    <span className='text-secondary'>*/}
            {/*            Price Change Since Comment:*/}
            {/*        </span>*/}
            {/*    <span className='ps-2 text-secondary'>*/}
            {/*            {moneyFormat.format(*/}
            {/*                coin.market_data.current_price.usd - previousCoin.market_data.current_price.usd*/}
            {/*            )}*/}
            {/*    </span>*/}
            {/*</p>*/}
            <i className="bi bi-hand-thumbs-up-fill text-success"></i> {comment.likes.toLocaleString("en-US")}
            <i className="bi bi-hand-thumbs-down-fill text-danger ps-3"></i> {comment.dislikes.toLocaleString("en-US")}
        </li>
    )}
}
export default PostListItem