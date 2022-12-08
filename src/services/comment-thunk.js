import {createAsyncThunk} from "@reduxjs/toolkit";
import {createNewComment, deleteGivenComment, getCommentsByObjectID} from "./comment-service";


export const createNewCommentThunk = createAsyncThunk(
    "createNewComment",
    (newComment) => createNewComment(newComment)
)

export const getCommentsByObjectIDThunk = createAsyncThunk(
    "getCommentsByObjectID",
    (arg) => getCommentsByObjectID(arg.objID, arg.objType)

)

export const deleteGivenCommentThunk = createAsyncThunk(
    "deleteGivenComment",
    (commentID) => deleteGivenComment(commentID)
)