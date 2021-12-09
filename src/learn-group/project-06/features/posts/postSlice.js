/*
 * @Description: Slice - Post List
 * @Author: F-Stone
 * @Date: 2021-11-24 11:54:45
 * @LastEditTime: Thu Dec 09 2021 16:54:48
 * @LastEditors: F-Stone
 */
import {
    createAsyncThunk,
    createSlice,
    nanoid,
    createSelector,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import { sub } from "date-fns";

const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState({
    status: "idle",
    error: null,
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                posts: [
                    {
                        id: "1",
                        user: "1",
                        title: "First Post!",
                        content: "Hello!",
                        date: sub(new Date(), { minutes: 10 }).toISOString(),
                    },
                    {
                        id: "2",
                        user: "2",
                        title: "Second Post!",
                        content: "More text!",
                        date: sub(new Date(), { minutes: 5 }).toISOString(),
                    },
                ],
            });
        }, 2000);
    });
    return response.posts;
});

export const addNewPost = createAsyncThunk(
    "posts/addNewPost",
    async (initialPost) => {
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    reject("模拟错误");
                } else {
                    resolve({
                        post: {
                            date: new Date().toISOString(),
                            id: nanoid(),
                            ...initialPost,
                        },
                    });
                }
            }, 1000);
        });
        return response.post;
    }
);

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.entities[postId];
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
                state.posts.push(action.payload);
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
            let existingPost = state.entities[id];
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = "succeeded";
            postsAdapter.upsertMany(state, action.payload);
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [addNewPost.fulfilled]: postsAdapter.addOne,
    },
});

export const { postAdded, postUpdate, reactionAdded } = postSlice.actions;
export default postSlice.reducer;

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);

export const selectPostsByUser = createSelector(
    [selectAllPosts, (state, userId) => userId],
    (posts, userId) => posts.filter((post) => post.user === userId)
);
