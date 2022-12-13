import {createSlice} from "@reduxjs/toolkit";
import {
    createNewCommentThunk, createNewUCRecordThunk,
    deleteGivenCommentThunk, deleteUCRecordThunk, findUCRecordByUserIDThunk,
    getCommentsByAuthorIDThunk,
    getCommentsByObjectIDThunk, updateUCRecordThunk
} from "../services/comment-thunk";


const initialState = {
    comments:[],
    userReactions: [],
    fetching: true,
    updateFlag: true
}

const GeneralCommentsReducer = createSlice({
    name: "GeneralCommentsReducer",
    initialState,
    extraReducers: {
        [createNewCommentThunk.pending]: () => {
        },
        [createNewCommentThunk.rejected]: () => {
            console.log("createNewCommentThunk is rejected");
        },
        [createNewCommentThunk.fulfilled]: (state) => {
            state.updateFlag = !state.updateFlag;
        },

        [getCommentsByObjectIDThunk.pending]: (state) => {
            state.fetching = true;
        },
        [getCommentsByObjectIDThunk.rejected]: (state) => {
            console.log("getCommentsByObjectIDThunk is rejected");
            state.fetching = true;
        },
        [getCommentsByObjectIDThunk.fulfilled]: (state, {payload}) => {
            state.fetching = false;
            state.comments = payload;
        },

        [deleteGivenCommentThunk.rejected]: (s, {payload}) => {
            console.log("deleteGivenCommentThunk is rejected");
            console.log(payload);
        },

        [deleteGivenCommentThunk.fulfilled]: (state) => {
            state.updateFlag = !state.updateFlag;
        },


        [getCommentsByAuthorIDThunk.pending]: (state) => {
            state.fetching = true
        },
        [getCommentsByAuthorIDThunk.fulfilled]: (state, {payload}) => {
            state.fetching = false
            state.comments = payload
        },

        [createNewUCRecordThunk.rejected]: () => {
            console.log("createNewCommentThunk is rejected")
        },
        [createNewUCRecordThunk.fulfilled]: (state) => {
            state.updateFlag = !state.updateFlag;
        },

        [findUCRecordByUserIDThunk.rejected]: () => {
            console.log("findUCRecordByUserIDThunk is rejected")
        },
        [findUCRecordByUserIDThunk.fulfilled]: (state, {payload}) => {
            state.userReactions = payload;
            state.fetching = false;
        },

        [deleteUCRecordThunk.rejected]: () => {
            console.log("deleteUCRecordThunk is rejected")
        },
        [deleteUCRecordThunk.fulfilled]: (state) => {
            state.updateFlag = !state.updateFlag;
        },

        [updateUCRecordThunk.rejected]: () => {
            console.log("updateUCRecordThunk is rejected")
        },
        [updateUCRecordThunk.fulfilled]: (state) => {
            state.updateFlag = !state.updateFlag;
        }
    }

})

export default GeneralCommentsReducer.reducer;