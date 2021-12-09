/*
 * @Description: 通知 store
 * @Author: F-Stone
 * @Date: 2021-12-08 19:00:19
 * @LastEditTime: 2021-12-09 13:11:20
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
    reducers: {
        allNotificationsRead(state, action) {
            state.forEach((notifications) => {
                notifications.read = true;
            });
        },
    },
    extraReducers: {
        [fetchNotifications.fulfilled]: (state, action) => {
            state.forEach((notification) => {
                notification.isNew = !notification.red;
            });
            state.push(...action.payload);
            state.sort((a, b) => b.date.localeCompare(a.date));
        },
    },
});

export const { allNotificationsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;

export const selectAllNotifications = (state) => state.notifications;
