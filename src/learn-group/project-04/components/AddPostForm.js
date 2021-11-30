/*
 * @Description: 添加帖子的表单
 * @Author: F-Stone
 * @Date: 2021-11-24 13:54:46
 * @LastEditTime: 2021-11-30 17:04:02
 * @LastEditors: F-Stone
 */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { addNewPost } from "../features/posts/postSlice";

export const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    const [addRequestStatus, setAddRequestStatus] = useState("idle");

    const dispatch = useDispatch();

    const users = useSelector((state) => state.user);

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const canSave = [title, content, userId,].every(Boolean) && addRequestStatus === "idle";

    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                setAddRequestStatus("pending");
                const resultAction = await dispatch(
                    addNewPost({title, content, user: userId})
                );
                unwrapResult(resultAction);
                setTitle("");
                setContent("");
                setUserId("");
            } catch (err) {
                console.error("Failed to save this post:", err);
            } finally {
                setAddRequestStatus('idle');
            }
        }
    };
    
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
