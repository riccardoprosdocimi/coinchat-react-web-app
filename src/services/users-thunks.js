import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./users-service";

export const createUserThunk = createAsyncThunk(
    'createUser',
    async user => await service.createUser(user)
);
export const registerThunk = createAsyncThunk(
    'register',
    async (user) => {
        return await service.register(user)
    }
)
export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await service.findAllUsers()
);
export const deleteUserThunk = createAsyncThunk(
    'deleteUser',
    async uid => {
        await service.deleteUser(uid);
        return uid;
    }
);
export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async user => await service.updateUser(user)
);
export const loginThunk = createAsyncThunk(
    'login',
    async user => await service.login(user)
);
export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await service.logout()
);
export const profileThunk = createAsyncThunk(
    'profile',
    async () => await service.profile()
);