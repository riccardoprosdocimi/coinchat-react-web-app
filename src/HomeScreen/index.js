
function HomeScreen() {
    return(
        <>
            <div className="row">
                <div className="col-2">
                    <p className="h1 text-warning"> CoinChat</p>
                </div>

                <div className="col-8">
                    <ul className="nav nav-tabs pt-1 mb-1">

                        <li className="nav-item">
                            <a className="nav-link active" href="/#"> Explore </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#"> Learn </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#"> Individuals </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" tabIndex="-1"> Developers </a>
                        </li>
                    </ul>
                </div>


                <div className="col-2">
                    <button type="button" className="btn btn-warning"> sign up</button>
                    <button type="button" className="btn btn-light">
                        <a href="../login/login.html"> sign in </a></button>


                </div>
            </div>
            <div className="row pt-2">

                <div className="col-10">
                    <div className="row">
                        <div className="col"> currency pic</div>
                        <div className="col"> price</div>
                        <div className="col"> review</div>

                    </div>

                    <div className="row">
                        <div className="col"> currency pic</div>
                        <div className="col"> price</div>
                        <div className="col"> review</div>

                    </div>

                    <div className="row">
                        <div className="col"> currency pic</div>
                        <div className="col"> price</div>
                        <div className="col"> review</div>
                    </div>


                </div>
                <div className="col-2">
                    <div className="row pb-1 "> Biggest gaines</div>
                    <ul className="list-group">
                        <li className="list-group-item">Forta</li>
                        <li className="list-group-item">TE-FOOD</li>
                        <li className="list-group-item">Media Network</li>
                    </ul>

                </div>
            </div>
        </>
    );
}
export default HomeScreen