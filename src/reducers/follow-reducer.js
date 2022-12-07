import {createSlice} from "@reduxjs/toolkit";
import {
    findFollowIdThunk,
    findUsersFollowedByUserThunk,
    findUsersFollowingUserThunk,
    userFollowsUserThunk,
    userUnfollowsUserThunk
} from "../services/follow-thunks";

const initialState = {
    // loading: false,
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
                // state.loading = false
                state.following.push(payload)
            },
            [userUnfollowsUserThunk.fulfilled]: (state, {payload}) => {
                // state.loading = false
                state.following = state.following.filter(user => {
                    return user._id !== payload
                })
            },
            [findUsersFollowingUserThunk.fulfilled]: (state, {payload}) => {
                // state.loading = false
                state.followers = payload
            },
            [findUsersFollowedByUserThunk.fulfilled]: (state, {payload}) => {
                // state.loading = false
                state.following = payload
            },
            // [findFollowIdThunk.pending]: state => {
            //     state.loading = true
            //     state.followId = null
            // },
            [findFollowIdThunk.fulfilled]: (state, {payload}) => {
                // state.loading = false
                state.followId = payload._id
            }
        }
    })

export default followReducer.reducer