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

const UsersReducer = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [createUserThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [registerThunk.pending]: state => {
            state.loading = true;
            state.currentUser = null;
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
            state.currentUser = action.payload;
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
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [findAllUsersThunk.rejected]: state => {
            state.loading = false;
        },
        [deleteUserThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = state.users.filter(user => user._id !== action.payload);
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            state.loading = false;
            const userIndex = state.users.findIndex(user => user._id === action.payload._id);
            state.users[userIndex] = {
                ...state.users[userIndex],
                ...action.payload
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
export default UsersReducer.reducer;