import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {COINGECKO_API_BASE_URL} from "../util/global-variables"


const BlogListItem = ({blog}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [coin, setCoin] = useState(null);
    // console.log(blog.coinID)
    useEffect(() => {
        fetch(`${COINGECKO_API_BASE_URL}/${blog.coinID}`)
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
    }, [])

    if (!isLoaded) {
        return (
            <h6>Loading...</h6>
        )
    }
    return (
        <Link to={{ pathname: '../blog',
            search: "blogID="+blog._id}}
              className="list-group-item list-group-item-action card mb-2">
            <div className="card-header d-flex">
                <h5>
                    {blog.title}
                </h5>
                <img className={"ms-auto me-1"} src={coin.image.large} width={"4%"} height={"4%"} alt={"The icon of this coin"}/>
                {coin.symbol.toUpperCase()}
            </div>
            <div className="card-body d-flex">
                <h6 className="card-text text-secondary">{blog.content.substring(0, 100)} {blog.content.length > 100?"...":""}</h6>

            </div>
        </Link>

    )

}

export default BlogListItem;