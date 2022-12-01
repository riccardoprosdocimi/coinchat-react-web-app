import {createSlice} from "@reduxjs/toolkit";
import {
    findAllUsersThunk,
    loginThunk,
    logoutThunk,
    registerThunk,
    profileThunk,
    deleteUserThunk, updateUserThunk, createUserThunk
} from "../services/users-thunks";

const initialState = {
    loading: false,
    users: [],
    currentUser: null,
    error: null
}

const usersReducer = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [createUserThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.users.push(payload);
        },
        [registerThunk.pending]: state => {
            state.loading = true;
            state.currentUser = null;
        },
        [registerThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.users.push(payload);
            state.currentUser = payload;
        },
        [registerThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.currentUser = null;
        },
        [findAllUsersThunk.pending]: state => {
            state.loading = true;
            state.users = [];
        },
        [findAllUsersThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.users = payload;
        },
        [findAllUsersThunk.rejected]: state => {
            state.loading = false;
        },
        [deleteUserThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.users = state.users.filter(user => user._id !== payload);
        },
        [updateUserThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            const userIndex = state.users.findIndex(user => user._id === payload._id);
            state.users[userIndex] = {
                ...state.users[userIndex],
                ...payload
            };
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        [loginThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.currentUser = null;
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        [profileThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        }
    }
});
export default usersReducer.reducer;