/*
 * @Description: 通知展示组件
 * @Author: F-Stone
 * @Date: 2021-12-08 19:26:22
 * @LastEditTime: 2021-12-09 00:55:00
 * @LastEditors: F-Stone
 */
import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllNotifications } from "../features/notifications/notificationsSlice";
import { selectAllUsers } from "../features/users/usersSlice";

export const NotificationsList = () => {
    const notifications = useSelector(selectAllNotifications);
    const users = useSelector(selectAllUsers);

    const renderedNotifications = notifications.map((notification) => {
        const date = parseISO(notification.date);
        const timeAgo = formatDistanceToNow(date);
        const user = users.find((user) => user.id === notification.user) || {
            name: "Unknown User",
        };

        return (
            <div key={notification.id} className="notification">
                <div>
                    <b>{user.name}</b> {notification.message}
                </div>
                <div title={notification.date}>
                    <i>{timeAgo} ago</i>
                </div>
            </div>
        );
    });

    return (
        <section className="notificationsList">
            <h2>Notifications</h2>
            {renderedNotifications}
        </section>
    );
};
