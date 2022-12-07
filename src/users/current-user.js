import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {profileThunk} from "../services/users-thunks";

const CurrentUser = ({children}) => {
    const {currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentUser) {
        dispatch(profileThunk());
        }
    }, []);
    return(children);
};
export default CurrentUser;