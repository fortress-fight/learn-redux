/*
 * @Description: 用户列表展示
 * @Author: F-Stone
 * @Date: 2021-12-08 17:47:17
 * @LastEditTime: 2021-12-08 18:24:16
 * @LastEditors: F-Stone
 */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../features/users/usersSlice";

export const UsersList = () => {
    const users = useSelector(selectAllUsers);
    const renderedUsers = users.map((user) => (
        <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
    ));

    return  (
        <section>
            <h2>Users</h2>
            <ul>{renderedUsers}</ul>
        </section>
    )
};
