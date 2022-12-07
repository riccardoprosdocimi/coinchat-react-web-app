import {createSlice} from "@reduxjs/toolkit";
import {
    findFollowIdThunk,
    findUsersFollowedByUserThunk,
    findUsersFollowingUserThunk,
    userFollowsUserThunk,
    userUnfollowsUserThunk
} from "../services/follow-thunks";

const initialState = {
    following: [],
    followers: [],
    followId: null
}

const followReducer = createSlice(
    {
        name: 'follow',
        initialState,
        extraReducers: {
            [userFollowsUserThunk.fulfilled]: (state, {payload}) => {
                state.following.push(payload)
            },
            [userUnfollowsUserThunk.fulfilled]: (state, {payload}) => {
                state.following = state.following.filter(user => {
                    return user._id !== payload
                })
            },
            [findUsersFollowingUserThunk.fulfilled]: (state, {payload}) => {
                state.followers = payload
            },
            [findUsersFollowedByUserThunk.fulfilled]: (state, {payload}) => {
                state.following = payload
            },
            [findFollowIdThunk.fulfilled]: (state, {payload}) => {
                state.followId = payload._id
            }
        }
    })

export default followReducer.reducer