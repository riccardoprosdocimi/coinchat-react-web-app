import {createSlice} from "@reduxjs/toolkit";

const currentUser = {
    firstName: "Cool",
    lastName: "Dog",
    handle: "@coolDog",
    profilePicture: "dog-profile.jpg",
    bannerPicture: "profile-banner.jpg",
    bio: "A pretty cool and awesome dog. Loves tennis balls and playing in parks. Let's go for a walk!",
    website: "google.com",
    location: "Boston, MA",
    dateOfBirth: "11/12/15",
    dateJoined: "4/2016",
    followingCount: 103,
    followersCount: 7352,
    tuitCount: 5210
}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: currentUser,
        reducers: {

        }
    }
)
export default profileSlice.reducer