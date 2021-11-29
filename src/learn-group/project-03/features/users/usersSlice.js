/*
 * @Description: 添加用户 Store
 * @Author: F-Stone
 * @Date: 2021-11-29 14:05:16
 * @LastEditTime: 2021-11-29 14:17:53
 * @LastEditors: F-Stone
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: "0", name: "Tianna Jenkins"},
    {id: "1", name: "Kevin Grant"},
    {id: "2", name: "Madison Price"}
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export default usersSlice.reducer;
