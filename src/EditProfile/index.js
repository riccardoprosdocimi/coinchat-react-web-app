import WatchListTable from "../WatchListTable/WatchListTable";
import {Link} from "react-router-dom";
import React from "react";
import Tab from "react-bootstrap/Tab";
import PostList from "../Profile/Posts/PostList";
import Tabs from "react-bootstrap/Tabs";

const EditProfile = () => {
    return(
        <div className={'row'}>
            <div className="col-xl-3 col-lg-4 col-md-5 mt-2">
                <div className="card">
                    <div className="card-img-top position-relative">
                        <img src="/images/profile-banner.jpg"
                             className="card-img-top" alt="..."/>
                        <img className="position-absolute rounded-circle img-thumbnail"
                             style={{'height' : '85%', 'width' : '50%', 'bottom' : '5%', 'left' : '25%'}}
                             src="/images/profile-picture.jpg" alt=""/>
                    </div>
                    <div className="card-body">
                        <div className="card-title fw-bold fs-4">
                            Dog Coin
                            <span className="fw-light text-secondary fs-6 ps-2">@DogCoin</span>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada
                            a lorem et lacinia. Maecenas accumsan sodales odio, eget mattis tortor
                            aliquet sed. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas.
                        </p>
                    </div>
                </div>
                <div className={'text-center pt-3 row'}>
                    <div className={'col'}>
                        <Link to={'/profile'}>
                            <button className={'btn btn-primary w-100'}>
                                Save
                            </button>
                        </Link>
                    </div>
                    <div className={'col'}>
                        <Link to={'/profile'}>
                            <button className={'btn btn-danger w-100'}>
                                Cancel
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 col-sm mt-2">
                <Tabs defaultActiveKey="first" variant={'pills'} fill={true}>
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="first" title="Comments">
                        <PostList />
                    </Tab>
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="second" title="Likes">
                        Comment Likes List
                    </Tab>
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="third" title="Profile Info">
                        Sensitive Profile Information
                    </Tab>
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="fourth" title="Watchlist">
                        <WatchListTable/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default EditProfile