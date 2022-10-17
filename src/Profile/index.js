import ProfileCard from "./ProfileCard";
import ProfileContent from "./ProfileContent";
import WatchListTable from "../WatchListTable/WatchListTable";

function ProfileComponent () {
    return(
        <div className={'row'}>
            <div className="d-none d-xl-block col-3 mt-2">
                <ProfileCard/>
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
 export default ProfileComponent