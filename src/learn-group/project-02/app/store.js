/*
 * @Description: React Store 
 * @Author: F-Stone
 * @Date: 2021-11-24 12:00:46
 * @LastEditTime: 2021-11-24 13:32:41
 * @LastEditors: F-Stone
 */

import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})
