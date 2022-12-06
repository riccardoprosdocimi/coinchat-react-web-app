import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import WatchListTable from "../watchlist-table/watchlist-table";
import PostList from "../profile/posts/post-list";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "../services/users-thunks";
import {
    findUsersFollowedByUserThunk,
    findUsersFollowingUserThunk,
    userFollowsUserThunk
} from "../services/follow-thunks";

const PublicProfile = () => {
    const {uid} = useParams()
    const {currentUser} = useSelector(state => state.users)
    const {publicProfile} = useSelector(state => state.users)
    const {followers, following} = useSelector(state => state.follow)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleFollowBtn = () => {
        if (currentUser) {
            dispatch(userFollowsUserThunk({followee: uid}))
        } else {
            navigate('/login')
        }
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findUsersFollowingUserThunk(uid))
        dispatch(findUsersFollowedByUserThunk(uid))
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
                                        className={'fw-bold pe-2'}>{followers.length}</span>
                                    <span className={'text-secondary'}>Followers</span>
                                </div>
                                <div className={'col'}>
                                    <span
                                        className={'fw-bold pe-2'}>{following.length}</span>
                                    <span className={'text-secondary'}>Following</span>
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
                    <button className={'btn btn-success w-100'}
                            onClick={handleFollowBtn}>
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
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="fourth" title="Followers">
                        <div className='list-group'>
                            {
                                followers &&
                                followers.map(
                                    follow =>
                                        <Link to={`/profile/${follow.follower._id}`}
                                              className='list-group-item'>
                                            <div className='row'>
                                                <div className='col-1'>
                                                    <img
                                                        src={`/images/p${follow.follower.avatar}.jpg`}
                                                        alt=""
                                                        className='rounded-circle pt-2 w-100'/>
                                                </div>
                                                <div className='col pt-2 fs-3 fw-bold'>
                                                    {follow.follower.firstName} {follow.follower.lastName}
                                                    <div className='fs-5 text-secondary fw-normal'>
                                                        @{follow.follower.handle}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                )
                            }
                        </div>
                    </Tab>
                    <Tab tabClassName={'wd-profile-tabs'}
                         eventKey="fifth" title="Following">
                        <div className='list-group'>
                            {
                                following &&
                                following.map(
                                    follow =>
                                        <Link to={`/profile/${follow.followee._id}`}
                                              className='list-group-item'>
                                            <div className='row'>
                                                <div className='col-1'>
                                                    <img
                                                        src={`/images/p${follow.followee.avatar}.jpg`}
                                                        alt=""
                                                        className='rounded-circle pt-2 w-100'/>
                                                </div>
                                                <div className='col pt-2 fs-3 fw-bold'>
                                                    {follow.followee.firstName} {follow.followee.lastName}
                                                    <div className='fs-5 text-secondary fw-normal'>
                                                        @{follow.followee.handle}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                )
                            }
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default PublicProfile