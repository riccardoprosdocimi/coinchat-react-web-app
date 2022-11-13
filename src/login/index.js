import React from "react";

const LoginScreen = () => {
    return(
        <div className="wd-bg-color">
            <div
                className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className="card pt-2 wd-bg-color" style="max-width: 30rem;">
                    <div className="card-header text-center wd-bg-color p-4 border-bottom-0">
                        <a className="wd-brand wd-brand-font p-4 rounded-circle"
                           href="../home/index.js">CoinChat</a>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title fw-bolder">Sign in to CoinChat</h3>
                        <form className="row gy-2 gx-3">
                            <label htmlFor="login-fields-username"
                                   className="col-form-label col-form-label-lg mb-0 pb-0">Email</label>
                            <input type="email" className="form-control form-control-lg"
                                   id="login-fields-username" placeholder="Your email address"
                                   title="Please enter your email address here"/>
                            <br/>
                            <label htmlFor="login-fields-password"
                                   className="col-form-label col-form-label-lg mb-0 pb-0">Password</label>
                            <input type="password" className="form-control form-control-lg"
                                   id="login-fields-password" placeholder="Password"
                                   title="Please enter your password here"/>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                           id="checkbox-save-username" value="SAVE-USERNAME"
                                           name="check-save-username"/>
                                    <label className="form-check-label"
                                           htmlFor="checkbox-save-username">
                                        Remember me
                                    </label>
                                </div>
                        </form>
                        <div className="d-flex justify-content-center">
                            <button type="submit"
                                    className="btn wd-btn-highlight rounded-pill mt-2 w-75 wd-font">Continue
                            </button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="register.html" type="button"
                               className="btn btn-sm btn-secondary rounded-pill mt-2 w-75 wd-font"
                               style="color: white">Create account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginScreen;