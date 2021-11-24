/*
 * @Description: Slice - Post List
 * @Author: F-Stone
 * @Date: 2021-11-24 11:54:45
 * @LastEditTime: 2021-11-24 14:23:42
 * @LastEditors: F-Stone
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "First Post!", content: "Hello!" },
    { id: "2", title: "Second Post!", content: "More text!" },
];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        },
    },
});

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
