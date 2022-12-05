import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE
const USERS_API = `${API_BASE}/users`

const api = axios.create({withCredentials: true})

export const userFollowsUser = async (uid, ouid) => {
    const response = await api.post(`${USERS_API}/${uid}/follow/${ouid}`)
    return response.data
}
export const userUnfollowsUser = async (uid, ouid) => {
    const response = await api.delete(`${USERS_API}/${uid}/follow/${ouid}`)
    return response.data
}
export const findUsersFollowingUser = async (uid) => {
    const response = await api.get(`${USERS_API}/${uid}/followers`)
    return response.data
}
export const findUsersFollowedByUser = async (uid) => {
    const response = await api.get(`${USERS_API}/${uid}/following`)
    return response.data
}