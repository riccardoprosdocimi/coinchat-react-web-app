import ProfileCard from "./ProfileCard";
import ProfileContent from "./ProfileContent";
import WatchListTable from "../WatchListTable/WatchListTable";

function ProfileComponent () {
    return(
        <div className={'row'}>
            <ProfileCard/>
            <ProfileContent/>
            <WatchListTable/>
        </div>
    )
 }
 export default ProfileComponent