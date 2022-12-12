import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "../services/users-thunks";

const EditUsers = () => {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);

    return(
        <>
            <ul className="list-group">
                {
                    users.map(
                        user =>
                            <li className="list-group-item"
                                key={user._id}>
                                {user.handle}
                            </li>
                    )
                };
            </ul>
        </>
    )
};
export default EditUsers;