/*
 * @Description: 通知展示组件
 * @Author: F-Stone
 * @Date: 2021-12-08 19:26:22
 * @LastEditTime: Thu Dec 09 2021 13:40:19
 * @LastEditors: F-Stone
 */
import React, { useEffect } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

import { selectAllNotifications, allNotificationsRead } from "../features/notifications/notificationsSlice";
import { selectAllUsers } from "../features/users/usersSlice";

export const NotificationsList = () => {
    const dispatch = useDispatch();
    const notifications = useSelector(selectAllNotifications);
    const users = useSelector(selectAllUsers);

    useEffect(() => {
        dispatch(allNotificationsRead());
    });

    const renderedNotifications = notifications.map((notification) => {
        const date = parseISO(notification.date);
        const timeAgo = formatDistanceToNow(date);
        const user = users.find((user) => user.id === notification.user) || {
            name: "Unknown User",
        };

        const notificationClassName = classnames("notification", {
            new: notification.isNew,
        });
        
        return (
            <div key={notification.id} className={notificationClassName}>
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
