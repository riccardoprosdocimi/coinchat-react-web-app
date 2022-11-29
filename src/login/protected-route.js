import {Navigate, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const protectedRoute = ({children}) => {
    const navigate = useNavigate();
    const {currentUser} = useSelector(state => state.users);
    if (currentUser) {
        return {children};
    } else {
        return(<Navigate to={'/login'}/>);
    }
};
export default protectedRoute;