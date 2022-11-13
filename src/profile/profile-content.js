import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PostList from "./posts/post-list";
import './index.css'
import WatchListTable from "../watchlist-table/watchlist-table";


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