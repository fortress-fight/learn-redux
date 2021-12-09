/*
 * @Description:
 * @Author: F-Stone
 * @Date: 2021-11-24 18:09:34
 * @LastEditTime: Thu Dec 09 2021 14:46:37
 * @LastEditors: F-Stone
 */
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNotifications, selectAllNotifications } from "../features/notifications/notificationsSlice";

export const Navbar = () => {
    const dispatch = useDispatch();
    const notifications = useSelector(selectAllNotifications);
    const numUnreadNotifications = notifications.filter((n) => !n.read).length;

    let unreadNotificationsBadge;

    if (numUnreadNotifications > 0) {
        unreadNotificationsBadge = <span className="badge">{numUnreadNotifications}</span>;
    }

    const fetchNewNotifications = () => {
        dispatch(fetchNotifications());
    };

    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">POST LIST</Link>
                        <Link to="/users">USER LIST</Link>
                        <Link to="/notifications">Notifications {unreadNotificationsBadge}</Link>
                    </div>
                    <button className="button" onClick={fetchNewNotifications}>
                        Refresh Notifications
                    </button>
                </div>
            </section>
        </nav>
    );
};
