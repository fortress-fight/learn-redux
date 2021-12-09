/*
 * @Description: 显示作者组件
 * @Author: F-Stone
 * @Date: 2021-11-29 14:38:21
 * @LastEditTime: 2021-12-13 11:24:53
 * @LastEditors: F-Stone
 */
import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "../features/users/usersSlice";

export const PostAuthor = ({ userId }) => {
    const author = useSelector((state) => selectUserById(state, userId));

    return <span>by {author ? author.name : "Unknown author"}</span>;
};
