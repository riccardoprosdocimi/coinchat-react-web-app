import React, {useEffect}  from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTrendingCoinsThunk} from "../services/home-thunk";


const MainComponent =() => {
    const coins = useSelector(
        state => state.coins)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrendingCoinsThunk())
    }, [])
    return (

        <ul className="list-group pt-4">



            {

                coins.map((coin)=>
                              <li key={coin._id} className={"list-group-item"}>
                                  <div className="row">

                                      <div className="col-xxl-2 col-xl-3 col-lg-3 ">
                                          <img src={coin.large} className="rounded" width="100px"
                                               height="100px"/>
                                      </div>

                                      <div className="col-xxl-7 col-xl-5 col-lg-5">
                                          <div className="fw-bolder pe-2" > {coin.name}
                                              <img src={coin.thumb} className="rounded" width="30px" height={"30px"}/>
                                          </div>
                                          <div className="text-secondary"> somethings can go here</div>

                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-lg-4">
                                          <button className="btn btn-warning wd-navbar-text float-end"> Follow
                                          </button>
                                      </div>
                                  </div>



                              </li>
                )
            }

        </ul>
    )

}
export default MainComponent