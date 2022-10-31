const MainComponent =() => {
    return (

        <ul className="list-group pt-4">
            <li className="list-group-item">
                <div className="row">

                    <div className="col-xxl-2 col-xl-3 col-lg-3 ">
                        <img src="../images/bitcoin.jpeg" className="rounded" width="100px"
                             height="100px"/>
                    </div>

                    <div className="col-xxl-7 col-xl-5 col-lg-5">
                        <div className="fw-bolder"> Bitcoin <i className="fab fa-bitcoin"></i></div>
                        <div className="text-secondary"> somethings can go here</div>

                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4">
                        <button className="btn btn-warning wd-navbar-text float-end"> Follow
                        </button>
                    </div>
                </div>

            </li>

            <li className="list-group-item">
                <div className="row">

                    <div className="col-xxl-2 col-xl-3 col-lg-3 ">
                        <img src="../images/ethereum.jpeg" className="rounded" width="100px"
                             height="100px"/>
                    </div>

                    <div className="col-xxl-7 col-xl-5 col-lg-5">
                        <div className="fw-bolder"> Ethereum <i className="fab fa-ethereum"></i>
                        </div>
                        <div className="text-secondary"> somethings can go here</div>

                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4">
                        <button className="wd-button-follow btn btn-warning wd-navbar-text float-end "> Follow
                        </button>
                    </div>
                </div>

            </li>

            <li className="list-group-item">
                <div className="row">

                    <div className="col-xxl-2 col-xl-3 col-lg-3 ">
                        <img src="../images/cardano.jpeg" className="rounded" width="100px"
                             height="100px"/>
                    </div>

                    <div className="col-xxl-7 col-xl-5 col-lg-5">
                        <div className="fw-bolder"> Cardano</div>
                        <div className="text-secondary"> somethings can go here</div>

                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4">
                        <button className="btn btn-warning wd-navbar-text float-end"> Follow
                        </button>
                    </div>
                </div>

            </li>
        </ul>
    )

}
export default MainComponent