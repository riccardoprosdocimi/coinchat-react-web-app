import axios from "axios";
import {Comment_API} from "../util/global-variables";

export const createNewComment = async (newComment) => {
    return await axios.post(Comment_API, newComment)
}


export const getCommentsByObjectID = async (objID, objType) => {
    if (objID.length === 0) {
        console.log("getComment receive empty object id");
        return {}
    }
    const requestBody = {
        objID: objID,
        objType: objType
    }

    const response = await axios.get(`${Comment_API}/object`, {params: requestBody})
    return response.data;
}


export const getCommentsByAuthorID = async (authorID) => {}