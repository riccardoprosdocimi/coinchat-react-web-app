import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    findUsersFollowedByUser,
    findUsersFollowingUser,
    userFollowsUser,
    userUnfollowsUser
} from "./follow-service"

export const userFollowsUserThunk = createAsyncThunk(
    'userFollowsUser',
    async (uid, ouid) =>
        await userFollowsUser(uid, ouid)
)

export const userUnfollowsUserThunk = createAsyncThunk(
    'userUnfollowsUser',
    async (uid, ouid) =>
        await userUnfollowsUser(uid, ouid)
)

export const findUsersFollowingUserThunk = createAsyncThunk(
    'findUsersFollowingUser',
    async (uid) =>
        await findUsersFollowingUser(uid)
)

export const findUsersFollowedByUserThunk = createAsyncThunk(
    'findUsersFollowedByUser',
    async (uid) =>
        await findUsersFollowedByUser(uid)
)