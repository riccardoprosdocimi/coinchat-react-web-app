import {createSlice} from "@reduxjs/toolkit";
import {createNewCommentThunk, getCommentsByObjectIDThunk} from "../services/comment-thunk";


const initialState = {
    comments:[],
    fetching: true
}

const GeneralCommentsReducer = createSlice({
    name: "GeneralCommentsReducer",
    initialState,
    extraReducers: {
        [createNewCommentThunk.pending]: (s, a) => {
            s.fetching = true;
        },
        [createNewCommentThunk.rejected]: (s, a) => {
            console.log("createNewCommentThunk is rejected");
            s.fetching = true;
        },
        [createNewCommentThunk.fulfilled]: (state, action) => {
            state.fetching = true;
        },

        [getCommentsByObjectIDThunk.pending]: (state, action) => {
            console.log("getCommentsByObjectIDThunk is fetching")
            state.fetching = true;
        },
        [getCommentsByObjectIDThunk.rejected]: (state, action) => {
            console.log("getCommentsByObjectIDThunk is rejected");
            state.fetching = true;
        },
        [getCommentsByObjectIDThunk.fulfilled]: (state, {payload}) => {
            console.log("getCommentsByObjectIDThunk is fulfilled");
            state.fetching = false;
            state.comments = payload;
            console.log(payload)
        }
    }

})

export default GeneralCommentsReducer.reducer;