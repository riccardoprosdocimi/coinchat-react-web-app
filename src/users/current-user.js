import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {profileThunk} from "../services/users-thunks";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk());
    }, []);
    return(children);
};
export default CurrentUser;