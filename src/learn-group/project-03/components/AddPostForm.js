/*
 * @Description: 添加帖子的表单
 * @Author: F-Stone
 * @Date: 2021-11-24 13:54:46
 * @LastEditTime: 2021-11-29 14:55:34
 * @LastEditors: F-Stone
 */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../features/posts/postSlice";

export const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");

    const dispatch = useDispatch();

    const users = useSelector((state) => state.user);

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content && userId) {
            dispatch(postAdded(title, content, userId));
            setTitle("");
            setContent("");
            setUserId("");
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map((user) => (
        <option value={user.id} key={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>添加新帖子</h2>
            <form>
                <label htmlFor="postAuthor">作者:</label>
                <select
                    name="postAuthor"
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthorChanged}
                >
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">内容:</label>
                <label htmlFor="postTitle">帖子标题:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                ></textarea>
                <input
                    type="button"
                    value="保存帖子"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                />
            </form>
        </section>
    );
};
