import {createSlice} from "@reduxjs/toolkit";
import {createNewCommentThunk, getCommentsByObjectIDThunk} from "../services/comment-thunk";


const initialState = {
    comments:[],
    fetching: true,
    updateFlag: true
}

const GeneralCommentsReducer = createSlice({
    name: "GeneralCommentsReducer",
    initialState,
    extraReducers: {
        [createNewCommentThunk.pending]: (s, a) => {
        },
        [createNewCommentThunk.rejected]: (s, a) => {
            console.log("createNewCommentThunk is rejected");
        },
        [createNewCommentThunk.fulfilled]: (state, action) => {
            state.updateFlag = !state.updateFlag;
        },

        [getCommentsByObjectIDThunk.pending]: (state, action) => {
            state.fetching = true;
        },
        [getCommentsByObjectIDThunk.rejected]: (state, action) => {
            console.log("getCommentsByObjectIDThunk is rejected");
            state.fetching = true;
        },
        [getCommentsByObjectIDThunk.fulfilled]: (state, {payload}) => {
            state.fetching = false;
            state.comments = payload;
        }
    }

})

export default GeneralCommentsReducer.reducer;