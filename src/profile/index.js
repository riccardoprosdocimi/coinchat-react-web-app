import WatchListTable from "../watchlist-table/watchlist-table";
import {Link} from "react-router-dom";
import React from "react";
import Tab from "react-bootstrap/Tab";
import PostList from "./posts/post-list";
import Tabs from "react-bootstrap/Tabs";
import {useSelector} from "react-redux";

// https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript
let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        //Remove the matched extension code
        //Change this to format for any country code.
        let intlCode = (match[1] ? `+${match[1]} ` : '')
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }
    return null;
}

function ProfileComponent () {
    const profile = useSelector(state => state.profile)
    return(
        <div className={'row'}>
            <div className="col-xl-3 col-lg-4 col-md-5 mt-2">
                <div className="card">
                    <div className="card-img-top position-relative">
                        <img src={`/images/${profile.bannerPicture}`}
                             className="card-img-top" alt="..."/>
                        <img className="position-absolute rounded-circle img-thumbnail"
                             style={{'height' : '85%', 'width' : '50%', 'bottom' : '5%', 'left' : '25%'}}
                             src={`/images/${profile.profilePicture}`} alt=""/>
                    </div>
                    <div className="card-body">
                        <div className="card-title fw-bold fs-3">
                            {profile.firstName} {profile.lastName}
                            <span className="fw-light text-secondary fs-5 ps-2">
                                @{profile.username}
                            </span>
                        </div>
                        <p className="card-text">
                            <div className={'row'}>
                                <div className={'col'}>
                                    <span className={'fw-bold pe-2'}>{profile.following}</span>
                                    <span className={'text-secondary'}>Following</span>
                                </div>
                                <div className={'col'}>
                                    <span className={'fw-bold pe-2'}>{profile.followers}</span>
                                    <span className={'text-secondary'}>Followers</span>
                                </div>
                            </div>
                            <div className={'pt-2'}>
                                {profile.bio}
                            </div>
                            <div className={'pt-2'}>
                                <i className={'bi bi-geo-fill pe-2'}></i>
                                {profile.location}
                            </div>
                            <div className={'pt-2'}>
                                <i className={'bi bi-globe pe-2'}></i>
                                <a href={`https://www.${profile.website}`}
                                   style={{textDecorationLine: 'none'}}>
                                    {profile.website}
                                </a>
                            </div>
                            <div className={'pt-2'}>
                                <i className={'bi bi-calendar3 pe-2'}></i>
                                {profile.dateJoined}
                            </div>
                            <div className={'pt-2'}>
                                <i className={'bi bi-balloon-fill pe-2'}></i>
                                {profile.dateOfBirth}
                            </div>
                            <div className={'pt-2'}>
                                <i className={'bi bi-telephone-fill pe-2'}></i>
                                {formatPhoneNumber(profile.phoneNumber)}
                            </div>
                            <div className={'pt-2'}>
                                <i className={'bi bi-house-fill pe-2'}></i>
                                {profile.address}
                            </div>
                            <div className={'pt-2'}>
                                <i className={'bi bi-person-square pe-2'}></i>
                                {profile.accountType}
                            </div>
                        </p>

                    </div>
                </div>
                <div className={'text-center pt-3'}>
                    <Link to={'/edit-profile'}>
                        <button className={'btn btn-warning w-100'}>
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 col-sm mt-2">
                <Tabs defaultActiveKey="first" variant={'pills'} fill={true}>
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="first" title="Comments">
                        <PostList />
                    </Tab>
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="second" title="Likes/Dislikes">
                        Comment Likes and Dislikes List
                    </Tab>
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="third" title="Watchlist">
                        <WatchListTable/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
 }
 export default ProfileComponent