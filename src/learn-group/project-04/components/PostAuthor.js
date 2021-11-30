/*
 * @Description: 显示作者组件
 * @Author: F-Stone
 * @Date: 2021-11-29 14:38:21
 * @LastEditTime: 2021-11-29 14:55:47
 * @LastEditors: F-Stone
 */
import React from "react";
import { useSelector } from "react-redux";

export const PostAuthor = ({ userId }) => {
    const author = useSelector(
        (state) => state.user.find(user => user.id === userId)
    );
  
    return <span>by {author ? author.name : 'Unknown author'}</span>
  }
