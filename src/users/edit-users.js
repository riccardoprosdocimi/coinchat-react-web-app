import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteUserThunk, findAllUsersThunk} from "../services/users-thunks";

const EditUsers = () => {
    const {users, loading} = useSelector(state => state.users);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);
    const deleteUserHandler = uid => {
        if (uid === users._id) {
            setError('You cannot delete the current user');
        } else {
            dispatch(deleteUserThunk(uid));
        }
    };

    return(
        <>
            {
                loading &&
                <h1>
                    Loading Users...
                </h1>
            }
            {
                !loading &&
                <h1 className="text-center mt-2">
                    {users.length} Users
                </h1>
            }
            <ul className="list-group mt-2">
                {
                    loading &&
                    <li className="list-group-item">
                        loading...
                    </li>
                }
                {
                    users.map(
                        user =>
                            <li className="list-group-item"
                                key={user._id}>
                                First name: {user.firstName}&emsp;
                                Last name: {user.lastName}&emsp;
                                Username: @{user.handle}&emsp;
                                Email: {user.email}
                                {
                                    error &&
                                    {error}
                                }
                                <button onClick={() => deleteUserHandler(user._id)}
                                        className="btn btn-danger float-end">
                                    Delete
                                </button>
                            </li>
                    )
                }
            </ul>
        </>
    )
};
export default EditUsers;