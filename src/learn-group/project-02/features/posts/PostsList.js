/*
 * @Description: Posts List 组件
 * @Author: F-Stone
 * @Date: 2021-11-24 13:12:56
 * @LastEditTime: 2021-11-24 13:17:41
 * @LastEditors: F-Stone
 */
import React from "react";
import { useSelector } from "react-redux";

export const PostsList = () => {
    const posts = useSelector((state) => state.posts);

    const renderedPosts = posts.map((post) => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
    ));

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};
