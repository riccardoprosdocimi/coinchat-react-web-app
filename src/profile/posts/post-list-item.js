import React from "react";
import {Link} from "react-router-dom";

const PostListItem = (
    {
        post = {
            "_id": 123,
            "coinId": "bitcoin",
            "symbol": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
            "coin": "BTC",
            "comment": "Wow very good!",
            "likes": 123,
            "dislikes": 234
        }
    }
) => {
    return(
        <div className={'list-group-item'}>
            <i className={'bi bi-x-lg float-end'}></i>
            <Link to={`/detail?coinID=${post.coinId}`} style={{textDecoration: 'none', color: 'black'}}>
                <h3>
                    <img className={'pe-1 pb-1'}
                         src={post.symbol} alt=""/>
                    {post.coin}
                </h3>
            </Link>
            <p>
                {post.comment}
            </p>
            <i className="bi bi-hand-thumbs-up-fill text-success"></i> {post.likes}
            <i className="bi bi-hand-thumbs-down-fill text-danger ps-3"></i> {post.dislikes}
        </div>
    )
}
export default PostListItem