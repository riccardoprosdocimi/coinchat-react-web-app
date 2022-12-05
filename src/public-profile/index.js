import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import WatchListTable from "../watchlist-table/watchlist-table";
import PostList from "../profile/posts/post-list";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import * as userService from "../services/users-service";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "../services/users-thunks";

const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector(state => state.users)
    const dispatch = useDispatch()
    const handleFollowBtn = () => {
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid])
    return (
        <div className={'row'}>
            <div className="col-xl-3 col-lg-4 col-md-5 mt-2">
                <div className="card">
                    <div className="card-img-top position-relative">
                        <img src={`/images/b${publicProfile.banner}.jpg`}
                             className="card-img-top" alt="..."/>
                        <img className="position-absolute rounded-circle img-thumbnail"
                             style={{
                                 'height': '85%',
                                 'width': '50%',
                                 'bottom': '5%',
                                 'left': '25%'
                             }}
                             src={`/images/p${publicProfile.avatar}.jpg`} alt=""/>
                    </div>
                    <div className="card-body">
                        <div className="card-title fw-bold fs-5">
                            {publicProfile.firstName} {publicProfile.lastName}
                            <span className="fw-light text-secondary fs-6 ps-2">
                                @{publicProfile.handle}
                            </span>
                        </div>
                        <p className="card-text">
                            <div className={'row'}>
                                <div className={'col'}>
                                    <span
                                        className={'fw-bold pe-2'}>{publicProfile.following}</span>
                                    <span className={'text-secondary'}>Following</span>
                                </div>
                                <div className={'col'}>
                                    <span
                                        className={'fw-bold pe-2'}>{publicProfile.followers}</span>
                                    <span className={'text-secondary'}>Followers</span>
                                </div>
                            </div>
                            <div className={'pt-2'}>
                                {publicProfile.bio}
                            </div>
                            <div className={'pt-2'}>
                                <i className={'bi bi-geo-fill pe-2'}></i>
                                {publicProfile.city}
                            </div>
                            <div className={'pt-2'}>
                                <i className={'bi bi-globe pe-2'}></i>
                                <a href={`https://www.${publicProfile.website}`}
                                   style={{textDecorationLine: 'none'}}>
                                    {publicProfile.website}
                                </a>
                            </div>
                            <div className={'pt-2'}>
                                <i className={'bi bi-person-square pe-2'}></i>
                                {publicProfile.type}
                            </div>
                        </p>
                    </div>
                </div>
                <div className={'text-center pt-3'}>
                    <button className={'btn btn-success w-100'}>
                        Follow
                    </button>
                </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 col-sm mt-2">
                <Tabs defaultActiveKey="first" variant={'pills'} fill={true}>
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="first" title="Watchlist">
                        <WatchListTable uid={uid} allowedToRemove={false}/>
                    </Tab>
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="second" title="Comments">
                        <PostList/>
                    </Tab>
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="third" title="Reactions">
                        Likes/Dislikes
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default PublicProfile