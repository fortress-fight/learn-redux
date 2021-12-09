/*
 * @Description: 作者个人页面
 * @Author: F-Stone
 * @Date: 2021-12-08 17:58:01
 * @LastEditTime: 2021-12-08 18:54:50
 * @LastEditors: F-Stone
 */
import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectUserById } from "../features/users/usersSlice";
import { selectPostsByUser } from "../features/posts/postSlice";
import { Link } from "react-router-dom";

export const UserPage = ({ match }) => {
    let { userId } = useParams();

    const user = useSelector((state) => selectUserById(state, userId));

    const postsForUser = useSelector((state) =>
        selectPostsByUser(state, userId)
    );

    const postTitles = postsForUser.map((post) => (
        <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
    ));

    return (
        <section>
            <h2>{user?.name}</h2>
            <ul>{postTitles}</ul>
        </section>
    );
};
