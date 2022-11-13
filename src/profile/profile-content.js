import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PostList from "./Posts/PostList";
import './index.css'
import WatchListTable from "../WatchListTable/WatchListTable";


function ProfileContent () {
    return(
        <>
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
        </>
    )
}
export default ProfileContent