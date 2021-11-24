/*
 * @Description: 添加帖子的表单
 * @Author: F-Stone
 * @Date: 2021-11-24 13:54:46
 * @LastEditTime: 2021-11-24 14:54:06
 * @LastEditors: F-Stone
 */
import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import {postAdded} from "./postSlice";

export const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )

            setTitle("");
            setContent("");
        }
    }

    return (
        <section>
            <h2>添加新帖子</h2>
            <form>
                <label htmlFor="postTitle">
                    帖子标题:
                </label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange}/>
                <label htmlFor="postContent">
                    内容:
                </label>
                <textarea name="postContent" id="postContent" value={content} onChange={onContentChange}></textarea> 
                <input type="button" value="保存帖子" onClick={onSavePostClicked} />
            </form>
        </section>
    )
}
