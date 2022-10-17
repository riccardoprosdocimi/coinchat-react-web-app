function ProfileContent () {
    return(
        <div className="row">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                       href="#nav-home" role="tab" aria-controls="nav-home"
                       aria-selected="true">Comments</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                       href="#nav-profile" role="tab" aria-controls="nav-profile"
                       aria-selected="false">Likes</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab"
                       href="#nav-contact" role="tab" aria-controls="nav-contact"
                       aria-selected="false">Profile Info</a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                     aria-labelledby="nav-home-tab">
                    <div className="list-group">
                        <a className="list-group-item position-relative" href="#">
                            <h3>
                                <img className={'pe-1 pb-1'}
                                     src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579" alt=""/>
                                BTC
                            </h3>
                            <p>
                                Donec sed posuere elit. Curabitur a luctus mauris. Duis lorem
                                lorem,
                                euismod ac metus nec, dapibus rhoncus ex. Nam a feugiat nulla.
                                Aliquam in pellentesque mauris. Ut ut arcu et eros hendrerit
                                pulvinar. Sed iaculis gravida leo, at efficitur massa commodo
                                vel.
                                Vivamus vel lectus tortor. Curabitur a efficitur velit.
                            </p>
                            <i className="bi bi-hand-thumbs-up-fill text-success"></i> 1,234
                            <i className="bi bi-hand-thumbs-down-fill text-danger ps-3"></i> 131
                        </a>
                        <a className="list-group-item position-relative" href="#">
                            <h3>
                                <img className={'pe-1 pb-1'}
                                    src="https://assets.coingecko.com/coins/images/69/thumb/monero_logo.png?1547033729" alt=""/>
                                XMR
                            </h3>
                            <p>
                                Nullam in nibh sapien. Maecenas quis sem eget metus tincidunt
                                sagittis a ut massa. Donec ligula turpis, euismod sit amet
                                dapibus a, hendrerit vitae sapien. Suspendisse suscipit mauris
                                ac sollicitudin pulvinar. Cras ante felis, malesuada nec dapibus
                                et, scelerisque et nibh. Proin tristique, lectus ac condimentum
                                gravida, risus lectus fermentum velit, ut gravida nisl risus ac
                                purus. Aliquam pellentesque id nisi eget condimentum. Duis
                                vulputate est sit amet consequat volutpat. Praesent pulvinar
                                volutpat ipsum, non interdum urna sodales sit amet. Aenean
                                ornare purus at mi porttitor, sit amet faucibus ante iaculis.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <i className="bi bi-hand-thumbs-up-fill text-success"></i> 19.1K
                            <i className="bi bi-hand-thumbs-down-fill text-danger ps-3"></i> 3
                        </a>
                        <a className="list-group-item position-relative" href="#">
                            <h3>
                                <img className={'pe-1 pb-1'}
                                     src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880" alt=""/>
                                ETH
                            </h3>
                            <p>
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                posuere cubilia curae; Mauris justo ante, rutrum non lectus et,
                                aliquam porta ipsum.
                            </p>
                            <i className="bi bi-hand-thumbs-up-fill text-success"></i> 13
                            <i className="bi bi-hand-thumbs-down-fill text-danger ps-3"></i> 3,456
                        </a>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                     aria-labelledby="nav-profile-tab">Profile
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                     aria-labelledby="nav-contact-tab">Contact
                </div>
            </div>
        </div>
    )
}
export default ProfileContent