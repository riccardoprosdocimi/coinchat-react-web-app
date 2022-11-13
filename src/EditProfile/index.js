import ProfileCard from "../Profile/ProfileCard";
import ProfileContent from "../Profile/ProfileContent";
import WatchListTable from "../WatchListTable/WatchListTable";
import {Link} from "react-router-dom";
import React from "react";

const EditProfile = () => {
    return(
        <div className={'row'}>
            <div className="d-none d-xl-block col-3 mt-2">
                <ProfileCard/>
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
            <div className="col-xl-6 col-lg-8 col-md-7 col-sm mt-2">
                <ProfileContent/>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-5 mt-2">
                <WatchListTable/>
            </div>
        </div>
    )
}
export default EditProfile