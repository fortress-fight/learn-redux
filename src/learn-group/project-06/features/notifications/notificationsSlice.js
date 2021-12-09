/*
 * @Description: 通知 store
 * @Author: F-Stone
 * @Date: 2021-12-08 19:00:19
 * @LastEditTime: 2021-12-13 11:15:22
 * @LastEditors: F-Stone
 */
import {
    createSlice,
    createAsyncThunk,
    nanoid,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import { sub } from "date-fns";

const notificationsAdapter = createEntityAdapter();

const initialState = notificationsAdapter.getInitialState();

export const fetchNotifications = createAsyncThunk(
    "notifications/fetchNotifications",
    async (_, { getState }) => {
        const allNotifications = selectAllNotifications(getState());
        const [latestNotification] = allNotifications;
        const latestTimestamp = latestNotification
            ? latestNotification.date
            : "";

        console.log("latestTimestamp:", latestTimestamp);

        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    notifications: [
                        {
                            id: nanoid(),
                            user: "0",
                            message: "Hi",
                            date: sub(new Date(), {
                                minutes: 10,
                            }).toISOString(),
                        },
                        {
                            id: nanoid(),
                            user: "1",
                            message: "Say",
                            date: sub(new Date(), {
                                minutes: 15,
                            }).toISOString(),
                        },
                        {
                            id: nanoid(),
                            user: "2",
                            message: "Good",
                            date: sub(new Date(), {
                                minutes: 20,
                            }).toISOString(),
                        },
                    ],
                });
            }, 2000);
        });
        return response.notifications;
    }
);

const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        allNotificationsRead(state, action) {
            Object.values(state.entities).forEach((notifications) => {
                notifications.read = true;
            });
        },
    },
    extraReducers: {
        [fetchNotifications.fulfilled]: (state, action) => {
            const notificationsWithMetadata = action.payload.map(
                (notification) => ({
                    ...notification,
                    read: false,
                    isNew: true,
                })
            );

            Object.values(state.entities).forEach((notification) => {
                notification.isNew = !notification.read;
            });

            notificationsAdapter.upsertMany(state, notificationsWithMetadata);
        },
    },
});

export const { allNotificationsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;

export const { selectAll: selectAllNotifications } =
    notificationsAdapter.getSelectors((state) => state.notifications);
