/*
 * @Description: 
 * @Author: F-Stone
 * @Date: 2021-11-28 23:05:08
 * @LastEditTime: 2021-11-29 00:30:22
 * @LastEditors: F-Stone
 */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { postUpdate } from '../features/posts/postSlice';

export const EditPostForm = ({match})  => {
    const {postId} = useParams();

    const post = useSelector(state => state.posts.find(post => post.id === postId))

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch = useDispatch();
    const navigator = useNavigate();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdate({id: postId, title: title, content: content}));
            navigator(`/posts/${postId}`) 
        }
    }

    return (
        <section>
            <h2>编辑帖子</h2>
            <form>
                <label htmlFor="postTitle">帖子标题:</label>
                <input type="text" id="postTitle" name="postTitle" placeholder="What's on your mind?" value={title} onChange={onTitleChanged} />
                <label htmlFor="postContent">内容:</label>
                <textarea name="postContent" id="postContent" cols="30" rows="10" value={content} onChange={onContentChanged}></textarea>
            </form>
            <input type="button" value="保存帖子" onClick={onSavePostClicked} />
        </section>
    )
}
