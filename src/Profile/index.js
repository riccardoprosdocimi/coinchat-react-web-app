import ProfileCard from "./ProfileCard";
import ProfileContent from "./ProfileContent";
import WatchListTable from "../WatchListTable/WatchListTable";
import {Link} from "react-router-dom";
import React from "react";

function ProfileComponent () {
    return(
        <div className={'row'}>
            <div className="col-xl-3 col-lg-4 col-md-5 mt-2">
                <ProfileCard/>
                <div className={'text-center pt-3'}>
                    <Link to={'/edit-profile'}>
                        <button className={'btn btn-warning w-100'}>
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 col-sm mt-2">
                <ProfileContent/>
            </div>
        </div>
    )
 }
 export default ProfileComponent