/*
 * @Description: 通知 store
 * @Author: F-Stone
 * @Date: 2021-12-08 19:00:19
 * @LastEditTime: 2021-12-09 00:51:42
 * @LastEditors: F-Stone
 */
import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

export const fetchNotifications = createAsyncThunk("notifications/fetchNotifications", async (_, { getState }) => {
    const allNotifications = selectAllNotifications(getState());
    const [latestNotification] = allNotifications;
    const latestTimestamp = latestNotification ? latestNotification.date : "";

    console.log("latestTimestamp:", latestTimestamp);

    const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                notifications: [
                    {
                        id: nanoid(),
                        user: "0",
                        message: "Hi",
                        date: sub(new Date(), { minutes: 10 }).toISOString(),
                    },
                    {
                        id: nanoid(),
                        user: "1",
                        message: "Say",
                        date: sub(new Date(), { minutes: 15 }).toISOString(),
                    },
                    {
                        id: nanoid(),
                        user: "2",
                        message: "Good",
                        date: sub(new Date(), { minutes: 20 }).toISOString(),
                    },
                ],
            });
        }, 2000);
    });
    return response.notifications;
});

const notificationsSlice = createSlice({
    name: "notifications",
    initialState: [],
    reducers: {},
    extraReducers: {
        [fetchNotifications.fulfilled]: (state, action) => {
            state.push(...action.payload);
            state.sort((a, b) => b.date.localeCompare(a.date));
        },
    },
});

export default notificationsSlice.reducer;

export const selectAllNotifications = (state) => state.notifications;
