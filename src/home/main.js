import React, {useEffect}  from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTrendingCoinsThunk} from "../services/home-thunk";
import {Link} from "react-router-dom";



const MainComponent =() => {

    const coins = useSelector(
        state => state.coins)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrendingCoinsThunk())
    }, [])

    console.log(coins)
    return (

        <ul className="list-group pt-4">



            {
                coins.map (coin =>
                              <li key={coin.item.coin_id}  className={"list-group-item"}>
                                  <div className="row">

                                      <div className="col-xxl-2 col-xl-3 col-lg-3 ">
                                          <img src={coin.item.large} className="rounded" width="100px"
                                               height="100px" alt={"Coin large thumbnail"}/>
                                      </div>

                                      <div className="col-xxl-7 col-xl-5 col-lg-5">
                                          <div className="fw-bolder pe-2" > {coin.item.name} -- {coin.item.symbol}

                                          </div>
                                          <div className="text-secondary"> <span> price: {coin.item.price_btc}</span></div>

                                      </div>

                                      <div className="col-xxl-3 col-xl-4 col-lg-4">
                                          <Link to={`/detail?coinID=${coin.item.id}`}>

                                              <button className="wd-button-follow btn btn-warning wd-navbar-text float-end d-flex align-items-center"> View

                                              </button>
                                          </Link>

                                      </div>

                                  </div>



                              </li>
                )
            }

        </ul>
    )

}
export default MainComponent