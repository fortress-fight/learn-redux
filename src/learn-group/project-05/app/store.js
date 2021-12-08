/*
 * @Description: React Store
 * @Author: F-Stone
 * @Date: 2021-11-24 12:00:46
 * @LastEditTime: 2021-12-08 19:21:37
 * @LastEditors: F-Stone
 */

import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postSlice";
import usersSlice from "../features/users/usersSlice";
import notificationsSlice from "../features/notifications/notificationsSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        user: usersSlice,
        notifications: notificationsSlice,
    },
});
