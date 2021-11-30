/*
 * @Description: 添加用户 Store
 * @Author: F-Stone
 * @Date: 2021-11-29 14:05:16
 * @LastEditTime: 2021-11-30 15:50:48
 * @LastEditors: F-Stone
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                users: [
                    { id: "0", name: "Tianna Jenkins" },
                    { id: "1", name: "Kevin Grant" },
                    { id: "2", name: "Madison Price" },
                ],
            });
        }, 2000);
    });
    return response.users;
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            return action.payload;
        }
    }
});

export default usersSlice.reducer;
