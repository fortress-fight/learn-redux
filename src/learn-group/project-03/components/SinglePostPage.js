/*
 * @Description: Post 详情页面
 * @Author: F-Stone
 * @Date: 2021-11-24 15:02:14
 * @LastEditTime: 2021-11-29 00:24:36
 * @LastEditors: F-Stone
 */
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const SinglePostPage = (props) => {
    let {postId} = useParams();

    const post = useSelector(state => {
        return state.posts.find(post => post.id === postId);
    })

    if (!post) {
        return (
            <section>
                <h2>页面未找到</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <Link to={`/editPost/${post.id}`} className="button">编辑文章</Link>
            </article>
        </section>
    )
}
