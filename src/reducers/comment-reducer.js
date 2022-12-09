import {createSlice} from "@reduxjs/toolkit";
import {
    createNewCommentThunk,
    deleteGivenCommentThunk,
    getCommentsByAuthorIDThunk,
    getCommentsByObjectIDThunk
} from "../services/comment-thunk";


const initialState = {
    comments:[],
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
            state.comments = []
        },
        [getCommentsByAuthorIDThunk.fulfilled]: (state, {payload}) => {
            state.fetching = false
            state.comments = payload
        }
    }

})

export default GeneralCommentsReducer.reducer;