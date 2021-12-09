/*
 * @Description: 添加用户 Store
 * @Author: F-Stone
 * @Date: 2021-11-29 14:05:16
 * @LastEditTime: 2021-12-13 11:19:46
 * @LastEditors: F-Stone
 */

import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({});

const initialState = usersAdapter.getInitialState();

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
        [fetchUsers.fulfilled]: usersAdapter.setAll,
    },
});

export default usersSlice.reducer;

export const { selectAll: selectAllUsers, selectById: selectUserById } =
    usersAdapter.getSelectors((state) => state.user);
