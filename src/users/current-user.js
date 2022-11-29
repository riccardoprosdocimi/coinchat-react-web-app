import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {profileThunk} from "../services/users-thunks";

const currentUser = ({children}) => {
    const {currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk())
    }, []);
    return(children);
};
export default currentUser;