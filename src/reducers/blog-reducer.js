import {createSlice} from "@reduxjs/toolkit";
import {
    createNewBlogThunk, deleteABlogThunk,
    findAllBlogsThunk,
    findBlogByAuthorIDThunk, findBlogByBlogIDThunk,
    findBlogByCoinIDThunk, updateABlogThunk
} from "../services/blog-thunk";

const initialState = {
    blogList:[],
    fetching: true,
    updateFlag: true
}


const BlogsReducer = createSlice({
    name: "BlogsReducer",
    initialState,
    extraReducers: {
        [createNewBlogThunk.rejected]: () => {
            console.log("createNewBlogThunk is rejected");
        },
        [createNewBlogThunk.fulfilled]: (state) => {
            state.updateFlag = !state.updateFlag;
        },
        [findAllBlogsThunk.rejected]: () => {
            console.log("findAllBlogsThunk is rejected");
        },
        [findAllBlogsThunk.pending]: (state) => {
            state.fetching = true;
        },
        [findAllBlogsThunk.fulfilled]: (state, {payload}) => {
            state.fetching = false;
            state.blogList = payload;
        },

        [findBlogByAuthorIDThunk.rejected]: () => {
            console.log("findBlogByAuthorIDThunk is rejected");
        },
        [findBlogByAuthorIDThunk.pending]: (state) => {
            state.fetching = true;
        },
        [findBlogByAuthorIDThunk.fulfilled]: (state, {payload}) => {
            state.fetching = false;
            state.blogList = payload;
        },

        [findBlogByCoinIDThunk.rejected]: () => {
            console.log("findBlogByCoinIDThunk is rejected");
        },
        [findBlogByCoinIDThunk.pending]: (state) => {
            state.fetching = true;
        },
        [findBlogByCoinIDThunk.fulfilled]: (state, {payload}) => {
            state.fetching = false;
            state.blogList = payload;

        },

        [findBlogByBlogIDThunk.rejected]: () => {
            console.log("findBlogByBlogIDThunk is rejected");
        },
        [findBlogByBlogIDThunk.pending]: (state) => {
            state.fetching = true;
        },
        [findBlogByBlogIDThunk.fulfilled]: (state, {payload}) => {
            state.fetching = false;
            state.blogList = [];
            state.blogList.push(payload);
        },

        [updateABlogThunk.rejected]: () => {
            console.log("updateABlogThunk is rejected");
        },
        [updateABlogThunk.fulfilled]: (state) => {
            state.updateFlag = !state.updateFlag;
        },

        [deleteABlogThunk.rejected]: () => {
            console.log("deleteABlogThunk is rejected");
        },
        [deleteABlogThunk.fulfilled]: (state) => {
            state.updateFlag = !state.updateFlag;
        },

    }

})

export default BlogsReducer.reducer;