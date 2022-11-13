import {createSlice} from "@reduxjs/toolkit";

const currentUser = {
    firstName: "Cool",
    lastName: "Dog",
    username: "coolDog",
    profilePicture: "profile-picture.jpg",
    bannerPicture: "profile-banner.jpg",
    bio: "A pretty cool and awesome dog. Loves tennis balls and playing in parks. Let's go for a walk!",
    website: "google.com",
    location: "Boston, MA",
    dateOfBirth: "11/12/15",
    dateJoined: "4/2016",
    phoneNumber: "+18584531530",
    address: "360 Huntington Ave",
    accountType: "Admin"

}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: currentUser,
        reducers: {
            updateProfile(state, action) {
                const updatedProfile = action.payload;
                let [firstName, ...lastName] = updatedProfile.name.split(' ')
                lastName = lastName.join(' ')
                const bio = updatedProfile.bio
                const location = updatedProfile.location
                const website = updatedProfile.website
                const [year, month, day] = updatedProfile.birthday.split('-')
                const dateOfBirth = [month, day, year].join('/')
                const phoneNumber = updatedProfile.phoneNumber
                const address = updatedProfile.address
                const accountType = updatedProfile.accountType
                return {
                    ...state,
                    firstName,
                    lastName,
                    bio,
                    location,
                    website,
                    dateOfBirth,
                    phoneNumber,
                    address,
                    accountType
                }
            }
        }
    }
)
export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer