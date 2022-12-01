import React, {useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../services/users-thunks";

const Login = () => {
    const {currentUser} = useSelector(state => state.users);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [error, setError] = useState(null);
    const changeEmail = event => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    };
    const changePassword = event => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleContinueBtn = () => {  // TODO: handle error
        try {
            setError(null);
            const loginUser = {email};
            dispatch(loginThunk(loginUser));
            setValidUsername(true);
        } catch (e) {
            setError('Invalid username');
        }
    };
    const handleLoginBtn = () => {  // TODO: handle error
        try {
            setError(null);
            const loginUser = {password};
            dispatch(loginThunk(loginUser));
            navigate('/profile');
        } catch (e) {
            setError('Invalid password');
        }
    };

    if (currentUser) {
        return(<Navigate to={'/profile'}/>);
    } else {
        return(
            <>
                {
                    error &&
                    <div className="alert alert-danger">
                        {error}
                    </div>
                }
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="card wd-bg-color"
                         style={{maxWidth: "30rem"}}>
                        <div className="card-header text-center wd-header-bg-color">
                            <Link to="/"
                                  className="wd-brand wd-brand-font">
                                CoinChat
                            </Link>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title fw-bolder">
                                Sign in to CoinChat
                            </h3>
                            <form className="row gy-2 gx-3">
                                {
                                    !validUsername &&
                                    <div>
                                        <label htmlFor="login-fields-username"
                                               className="col-form-label col-form-label-lg mb-0 pb-0">
                                            Email
                                        </label>
                                        <input type="email"
                                               className="form-control form-control-lg"
                                               id="login-fields-username"
                                               placeholder="Your email address"
                                               title="Please enter your email address here"
                                               value={email}
                                               onChange={changeEmail}/>
                                    </div>
                                }
                                {
                                    validUsername &&
                                    <div>
                                        <label htmlFor="login-fields-password"
                                               className="col-form-label col-form-label-lg mb-0 pb-0">
                                            Password
                                        </label>
                                        <input type="password"
                                               className="form-control form-control-lg"
                                               id="login-fields-password"
                                               placeholder="Password"
                                               title="Please enter your password here"
                                               value={password}
                                               onChange={changePassword}/>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                   type="checkbox"
                                                   id="checkbox-save-username"
                                                   value="SAVE-USERNAME"
                                                   name="check-save-username"/>
                                            <label className="form-check-label"
                                                   htmlFor="checkbox-save-username">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                }
                            </form>
                            {
                                !validUsername &&
                                <div>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit"
                                                className="btn wd-btn-style rounded-pill mt-2 w-75 wd-font"
                                                onClick={handleContinueBtn}>
                                            Continue
                                        </button>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Link to="/register"
                                              type="button"
                                              className="btn btn-sm btn-secondary rounded-pill mt-2 w-75 wd-font"
                                              style={{color: "white"}}>
                                            Create account
                                        </Link>
                                    </div>
                                </div>
                            }
                            {
                                validUsername &&
                                <div className="d-flex justify-content-center">
                                    <button type="submit"
                                            className="btn wd-btn-style rounded-pill mt-2 w-75 wd-font"
                                            onClick={handleLoginBtn}>
                                        Login
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
};
export default Login;