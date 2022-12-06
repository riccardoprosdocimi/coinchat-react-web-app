import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../services/users-thunks";
import {Navigate} from "react-router-dom";

const Register = () => {
    const {currentUser} = useSelector(state => state.users);
    const [error, setError] = useState(null);
    const [banner, setBanner] = useState('');
    const [avatar, setAvatar] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');
    const [birthday, setBirthday] = useState(null);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [countryCode, setCountryCode] = useState(null);
    const [number, setNumber] = useState(null);
    const [password, setPassword] = useState('');
    const [validatePassword, setValidatePassword] = useState('');
    const [accountType, setAccountType] = useState(null);
    const changeFirstName = event => {
        const newFirstName = event.target.value;
        setFirstName(newFirstName);
    };
    const changeLastName = event => {
        const newLastName = event.target.value;
        setLastName(newLastName);
    };
    const changeBio = event => {
        const newBio = event.target.value;
        setBio(newBio);
    };
    const changeCity = event => {
        const newCity = event.target.value;
        setCity(newCity);
    };
    const changeAddress = event => {
        const newAddress = event.target.value;
        setAddress(newAddress);
    };
    const changeWebsite = event => {
        const newWebsite = event.target.value;
        setWebsite(newWebsite);
    };
    const changeBirthday = event => {
        const newBirthday = event.target.value;
        setBirthday(newBirthday);
    };
    const changeEmail = event => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    };
    const changeUsername = event => {
        const newUsername = event.target.value;
        setUsername(newUsername);
    };
    const changeCountryCode = event => {
        const newCountryCode = event.target.value;
        setCountryCode(newCountryCode);
    };
    const changeNumber = event => {
        const newNumber = event.target.value;
        setNumber(newNumber);
    };
    const changePassword = event => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    };
    const changeValidatePassword = event => {
        const newValidatePassword = event.target.value;
        setValidatePassword(newValidatePassword);
    };
    const changeAccountType = event => {
        const newAccountType = event.target.value;
        setAccountType(newAccountType);
    };
    const dispatch = useDispatch();
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match');
            return;
        } else {
            setError(null);
            const newUser = {
                "banner":  banner,
                "avatar": avatar,
                "firstName": firstName,
                "lastName": lastName,
                "bio": bio,
                "city": city,
                "address": address,
                "website": website,
                "birthday": birthday,
                "email": email,
                "handle": username,
                "countryCode": countryCode,
                "number": number,
                "password": password,
                "accountType": accountType
            };
            dispatch(registerThunk(newUser));
        }
    };

    if (currentUser) {
        return(<Navigate to={'/profile'}/>);
    } else {
        return(
            <div className="container w-50">
                <h1 className="fw-bolder mt-2">
                    Create your CoinChat account
                </h1>
                <br/>
                {/*<div className="position-relative">*/}
                {/*    <img src="/images/opacity.jpeg"*/}
                {/*         className="opacity-50 position-absolute"*/}
                {/*         width="100%"*/}
                {/*         height={250}*/}
                {/*         alt="null"/>*/}
                {/*    <img src={`/images/profile-banner.jpg`}*/}
                {/*         className="opacity-50"*/}
                {/*         width="100%"*/}
                {/*         height={250}*/}
                {/*         alt="user's profile banner"/>*/}
                {/*</div>*/}
                {/*<div className="position-relative">*/}
                {/*    <img src="/images/opacity.jpeg"*/}
                {/*         className="rounded-circle wd-profile-nudge-up position-absolute"*/}
                {/*         width={200}*/}
                {/*         height={200}*/}
                {/*         alt="null"/>*/}
                {/*    <img src={`/images/profile-picture.jpg`}*/}
                {/*         className="rounded-circle wd-profile-nudge-up position-absolute opacity-50"*/}
                {/*         width={200}*/}
                {/*         height={200}*/}
                {/*         alt="user's avatar"/>*/}
                {/*    <button className="wd-clear-button-styling position-absolute">*/}
                {/*        <i className="bi bi-circle-fill position-absolute wd-circle-avatar-overlap opacity-50 hstack"/>*/}
                {/*        <i className="bi bi-camera position-absolute wd-camera-avatar-overlap opacity-75 hstack"/>*/}
                {/*    </button>*/}
                {/*    <button className="wd-clear-button-styling position-absolute">*/}
                {/*        <i className="bi bi-circle-fill position-absolute wd-circle-camera-banner-overlap opacity-50 hstack"/>*/}
                {/*        <i className="bi bi-camera position-absolute wd-camera-banner-overlap opacity-75 hstack"/>*/}
                {/*    </button>*/}
                {/*    <button className="wd-clear-button-styling position-absolute">*/}
                {/*        <i className="bi bi-circle-fill position-absolute wd-circle-x-banner-overlap opacity-50 hstack"/>*/}
                {/*        <i className="bi bi-x position-absolute wd-x-banner-overlap opacity-75 hstack"/>*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div className="position-relative wd-profile-nudge-down">
                    <hr/>
                    <h6>
                        Required fields have an asterisk: *
                    </h6>
                    <br/>
                    {
                        error &&
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    }
                    <div className="row g-5">
                        <div className="col">
                            <label htmlFor="first-name"
                                   className="col-form-label col-form-label-lg">
                                FIRST NAME*
                            </label>
                            <input id="first-name"
                                   type="text"
                                   className="form-control form-control-lg"
                                   placeholder="John"
                                   aria-label="First name"
                                   title="Please enter your first name here"
                                   value={firstName}
                                   onChange={changeFirstName}/>
                        </div>
                        <div className="col">
                            <label htmlFor="last-name"
                                   className="col-form-label col-form-label-lg">
                                LAST NAME*
                            </label>
                            <input id="last-name"
                                   type="text"
                                   className="form-control form-control-lg"
                                   placeholder="Doe"
                                   aria-label="Last name"
                                   title="Please enter your last name here"
                                   value={lastName}
                                   onChange={changeLastName}/>
                        </div>
                    </div>
                    <br/>
                    <label htmlFor="bio"
                           className="col-form-label col-form-label-lg">
                        BIO
                    </label>
                    <textarea id="bio"
                              className="form-control form-control-lg"
                              placeholder="Something about you"
                              title="Please enter something about you here"
                              value={bio}
                              onChange={changeBio}/>
                    <br/>
                    <label htmlFor="city"
                           className="col-form-label col-form-label-lg">
                        CITY
                    </label>
                    <input id="city"
                           type="text"
                           className="form-control form-control-lg"
                           placeholder="Nowhere, US"
                           title="Please enter the city where you currently live in here"
                           value={city}
                           onChange={changeCity}/>
                    <br/>
                    <label htmlFor="address"
                           className="col-form-label col-form-label-lg">
                        ADDRESS
                    </label>
                    <input id="address"
                           type="text"
                           className="form-control form-control-lg"
                           placeholder="159 Crypto St"
                           title="Please enter the city where you currently live in here"
                           value={address}
                           onChange={changeAddress}/>
                    <br/>
                    {/*<label htmlFor="country-region"*/}
                    {/*       className="col-form-label col-form-label-lg">*/}
                    {/*    COUNTRY/REGION**/}
                    {/*</label>*/}
                    {/*<select id="country-region"*/}
                    {/*        className="form-select form-select-lg"*/}
                    {/*        title="Please select the country/region where you reside here"*/}
                    {/*        required>*/}
                    {/*    <option selected>*/}
                    {/*        Choose...*/}
                    {/*    </option>*/}
                    {/*    <option value="UNITED-STATES">*/}
                    {/*        United States*/}
                    {/*    </option>*/}
                    {/*    <option value="EUROPE">*/}
                    {/*        Europe*/}
                    {/*    </option>*/}
                    {/*    <option value="AFRICA">*/}
                    {/*        Africa*/}
                    {/*    </option>*/}
                    {/*    <option value="OCEANIA">*/}
                    {/*        Oceania*/}
                    {/*    </option>*/}
                    {/*    <option value="ASIA">*/}
                    {/*        Asia*/}
                    {/*    </option>*/}
                    {/*</select>*/}
                    <label htmlFor="website"
                           className="col-form-label col-form-label-lg">
                        WEBSITE
                    </label>
                    <input id="website"
                           type="text"
                           className="form-control form-control-lg"
                           placeholder="example.com"
                           title="Please enter your website here"
                           value={website}
                           onChange={changeWebsite}/>
                    <br/>
                    <label htmlFor="birthday"
                           className="col-form-label col-form-label-lg">
                        BIRTHDAY*
                    </label>
                    <input type="date"
                           className="form-select form-select-lg"
                           id="birthday"
                           title="Please enter your birthdate here"
                           value={birthday}
                           onChange={changeBirthday}/>
                    <br/>
                    <hr/>
                    <label htmlFor="email"
                           className="col-form-label col-form-label-lg">
                        EMAIL*
                    </label>
                    <input type="email"
                           className="form-control form-control-lg"
                           id="email"
                           placeholder="name@example.com"
                           title="Please enter your email address here"
                           value={email}
                           onChange={changeEmail}/>
                    <br/>
                    <label className="visually-hidden"
                           htmlFor="username">
                        USERNAME
                    </label>
                    <div className="input-group">
                        <div className="input-group-text">
                            @
                        </div>
                        <input type="text"
                               className="form-control form-control-lg"
                               id="username"
                               placeholder="Username*"
                               title="Please enter your username here"
                               value={username}
                               onChange={changeUsername}/>
                    </div>
                    <br/>
                    <div className="row g-5">
                        <div className="col">
                            <label htmlFor="country-code"
                                   className="visually-hidden">
                                COUNTRY CODE
                            </label>
                            <select id="country-code"
                                    className="form-select form-select-lg"
                                    title="Please select your phone number's country code"
                                    value={countryCode}
                                    onChange={changeCountryCode}>
                                <option value={null} selected disabled>
                                    Select the country code
                                </option>
                                <option value="UNITED-STATES-CODE">
                                    +1 (United States)
                                </option>
                                <option value="ITALY-CODE">
                                    +39 (Italy)
                                </option>
                                <option value="EGYPT-CODE">
                                    +20 (Egypt)
                                </option>
                                <option value="AUSTRALIA-CODE">
                                    +61 (Australia)
                                </option>
                                <option value="CHINA-CODE">
                                    +86 (China Mainland)
                                </option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="phone-number"
                                   className="visually-hidden">
                                PHONE NUMBER
                            </label>
                            <input type="tel"
                                   className="form-control form-control-lg"
                                   id="phone-number"
                                   placeholder="Phone number"
                                   title="Please enter your phone number here"
                                   value={number}
                                   onChange={changeNumber}/>
                        </div>
                    </div>
                    <br/>
                    <label htmlFor="password"
                           className="visually-hidden">
                        PASSWORD
                    </label>
                    <input type="password"
                           className="form-control form-control-lg"
                           id="password"
                           placeholder="Password*"
                           title="Please enter your password here"
                           value={password}
                           onChange={changePassword}/>
                    <br/>
                    <input type="password"
                           className="form-control form-control-lg"
                           placeholder="Confirm password*"
                           title="Please re-enter your password here"
                           value={validatePassword}
                           onChange={changeValidatePassword}/>
                    <br/>
                    <hr/>
                    <label htmlFor="account-type"
                           className="col-form-label col-form-label-lg">
                        ACCOUNT TYPE*
                    </label>
                    <select id="account-type"
                            className="form-select form-select-lg"
                            title="Please select which account type you want to create"
                            value={accountType}
                            onChange={changeAccountType}>
                        <option value={null} selected disabled>
                            Please select the account type
                        </option>
                        <option value="PERSONAL">
                            Personal
                        </option>
                        <option value="PROFESSIONAL">
                            Professional
                        </option>
                        <option value="ADMINISTRATOR">
                            Administrator
                        </option>
                    </select>
                    <br/>
                    <div className="d-flex justify-content-center">
                        <button type="submit"
                                className="btn btn-lg wd-btn-style rounded-pill mt-2 w-75 wd-font mb-5"
                                onClick={handleRegisterBtn}>
                            Create free account
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};
export default Register;