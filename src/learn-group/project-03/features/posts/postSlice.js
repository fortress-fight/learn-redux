/*
 * @Description: Slice - Post List
 * @Author: F-Stone
 * @Date: 2021-11-24 11:54:45
 * @LastEditTime: 2021-11-29 19:24:19
 * @LastEditors: F-Stone
 */
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "1",
        title: "First Post!",
        content: "Hello!",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        id: "2",
        title: "Second Post!",
        content: "More text!",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
    },
];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find((post) => post.id === postId);
            if (existingPost) {
                if (!existingPost.reactions) {
                    existingPost.reactions = {
                        thumbsUp: 0,
                        hooray: 0,
                        heart: 0,
                        rocket: 0,
                        eyes: 0,
                    };
                }
                existingPost.reactions[reaction]++;
            }
        },
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        date: new Date().toISOString(),
                        id: nanoid(),
                        title,
                        content,
                        user: userId,
                    },
                };
            },
        },
        postUpdate(state, action) {
            let { id, title, content } = action.payload;
            let existingPost = state.find(({ id: postId }) => postId === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
    },
});

export const { postAdded, postUpdate, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
