/*
 * @Description:
 * @Author: F-Stone
 * @Date: 2021-11-24 18:09:34
 * @LastEditTime: 2021-12-09 00:33:31
 * @LastEditors: F-Stone
 */
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNotifications } from "../features/notifications/notificationsSlice";

export const Navbar = () => {
    const dispatch = useDispatch();

    const fetchNewNotifications = () => {
        dispatch(fetchNotifications());
    }

    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">POST LIST</Link>
                        <Link to="/users">USER LIST</Link>
                        <Link to="/notifications">Notification</Link>
                    </div>
                    <button className="button" onClick={fetchNewNotifications}>
                        Refresh Notifications
                    </button>
                </div>
            </section>
        </nav>
    );
};
