/*
 * @Description: Slice - Post List
 * @Author: F-Stone
 * @Date: 2021-11-24 11:54:45
 * @LastEditTime: 2021-11-29 00:44:03
 * @LastEditors: F-Stone
 */
import {
    createSlice,
    nanoid
} from "@reduxjs/toolkit";

const initialState = [{
        id: "1",
        title: "First Post!",
        content: "Hello!"
    },
    {
        id: "2",
        title: "Second Post!",
        content: "More text!"
    },
];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
        postUpdate(state, action) {
            let {
                id,
                title,
                content
            } = action.payload;
            let existingPost = state.find(({
                id: postId
            }) => postId === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        }
    },
});

export const {
    postAdded,
    postUpdate
} = postSlice.actions;
export default postSlice.reducer;
