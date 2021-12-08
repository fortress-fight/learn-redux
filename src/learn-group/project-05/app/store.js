/*
 * @Description: React Store 
 * @Author: F-Stone
 * @Date: 2021-11-24 12:00:46
 * @LastEditTime: 2021-11-29 14:18:42
 * @LastEditors: F-Stone
 */

import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        user: usersSlice
    }
})
