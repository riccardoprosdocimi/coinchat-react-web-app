import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from '../reducers/profile-reducer'

const EditProfile = () => {
    const profile = useSelector(state => state.profile)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState(profile.firstName + ' ' + profile.lastName)
    const [bio, setBio] = useState(profile.bio)
    const [location, setLocation] = useState(profile.location)
    const [website, setWebsite] = useState(profile.website)
    const birthdayData = profile.dateOfBirth.split('/')
    const [birthday, setBirthday] = useState(
        birthdayData[2] + "-" + birthdayData[0] + '-' + birthdayData[1])
    const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber)
    const [address, setAddress] = useState(profile.address)
    const [accountType, setAccountType] = useState(profile.accountType)

    const updateProfileHandler = () => {
        dispatch(updateProfile(
            {
                name,
                bio,
                location,
                website,
                birthday,
                phoneNumber,
                address,
                accountType
            })
        )
        navigate('/profile')
    }

    return (
        <div className={'row'}>
            <div className={'col-3'}></div>
            <div className="col-6 pt-2">
                <div className="card">
                    <div className="card-img-top position-relative">
                        <img src={`/images/${profile.bannerPicture}`}
                             className="card-img-top" alt="..."/>
                        <img className="position-absolute rounded-circle img-thumbnail"
                             style={{
                                 'height': '85%',
                                 'width': '50%',
                                 'bottom': '5%',
                                 'left': '25%'
                             }}
                             src={`/images/${profile.profilePicture}`} alt=""/>
                    </div>
                    <div className={'row pt-1'}>
                        <div className={'col text-center'}>
                            <button className={'btn btn-warning'}>
                                Profile
                                <i className={'bi bi-camera-fill ps-2'}></i>
                            </button>
                        </div>
                        <div className={'col text-center'}>
                            <button className={'btn btn-warning'}>
                                Banner
                                <i className={'bi bi-camera-fill ps-2'}></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            <div className={'form-group pt-0'}>
                                <div
                                    className={'border border-secondary rounded-2 border-opacity-25'}>
                                    <label className={'ps-2 text-secondary fs-6'}
                                           htmlFor={"name-field"}>Name</label>
                                    <input type={"text"} className={"form-control border-0 ps-2"}
                                           id={"name-field"} value={name}
                                           onChange={event => {
                                               setName(event.target.value)
                                           }}/>
                                </div>
                            </div>
                            <div className={"form-group pt-2"}>
                                <div
                                    className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                                    <label className={'ps-2 text-secondary fs-6'}
                                           htmlFor={"bio-field"}>Bio</label>
                                    <textarea className={"form-control border-0 ps-2"}
                                              id={"bio-field"} value={bio}
                                              onChange={event => setBio(event.target.value)}/>
                                </div>
                            </div>
                            <div className={"form-group pt-2"}>
                                <div
                                    className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                                    <label className={'ps-2 text-secondary fs-6'}
                                           htmlFor={"location-field"}>Location</label>
                                    <input type={"text"} className={"form-control border-0 ps-2"}
                                           id={"location-field"} value={location}
                                           onChange={event => setLocation(event.target.value)}/>
                                </div>
                            </div>
                            <div className={"form-group pt-2"}>
                                <div
                                    className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                                    <label className={'ps-2 text-secondary fs-6'}
                                           htmlFor={"website-field"}>Website</label>
                                    <input type={"text"} className={"form-control border-0 ps-2"}
                                           id={"website-field"} value={website}
                                           onChange={event => setWebsite(event.target.value)}/>
                                </div>
                            </div>
                            <div className={"form-group pt-2"}>
                                <div
                                    className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                                    <label className={'ps-2 text-secondary fs-6'}
                                           htmlFor={"birthday-field"}>Birthday</label>
                                    <input type={"date"} className={"form-control border-0 ps-2"}
                                           id={"birthday-field"} value={birthday}
                                           onChange={event => setBirthday(event.target.value)}/>
                                </div>
                            </div>
                            <div className={"form-group pt-2"}>
                                <div
                                    className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                                    <label className={'ps-2 text-secondary fs-6'}
                                           htmlFor={"phone-field"}>Phone Number</label>
                                    <input type={"text"} className={"form-control border-0 ps-2"}
                                           id={"phone-field"} value={phoneNumber}
                                           onChange={event => setPhoneNumber(event.target.value)}/>
                                </div>
                            </div>
                            <div className={"form-group pt-2"}>
                                <div
                                    className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                                    <label className={'ps-2 text-secondary fs-6'}
                                           htmlFor={"address-field"}>Address</label>
                                    <input type={"text"} className={"form-control border-0 ps-2"}
                                           id={"address-field"} value={address}
                                           onChange={event => setAddress(event.target.value)}/>
                                </div>
                            </div>
                            <div className={"form-group pt-2"}>
                                <div
                                    className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                                    <label className={'ps-2 text-secondary fs-6'}
                                           htmlFor={"account-field"}>Account Type</label>
                                    <select className={"form-control border-0 ps-2"}
                                            id={"account-field"}
                                            onChange={event => setAccountType(event.target.value)}>
                                        <option value={profile.accountType}>Admin</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Professional">Professional</option>
                                    </select>
                                </div>
                            </div>
                        </p>
                        <div className={'text-center row'}>
                            <div className={'col'}>
                                <button className={'btn btn-primary w-100'}
                                        onClick={updateProfileHandler}>
                                    Save
                                </button>
                            </div>
                            <div className={'col'}>
                                <Link to={'/profile'}>
                                    <button className={'btn btn-danger w-100'}>
                                        Cancel
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'col-3'}></div>
        </div>
    )
}
export default EditProfile