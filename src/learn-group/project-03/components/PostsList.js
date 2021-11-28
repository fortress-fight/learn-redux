/*
 * @Description: Posts List 组件
 * @Author: F-Stone
 * @Date: 2021-11-24 13:12:56
 * @LastEditTime: 2021-11-24 19:45:24
 * @LastEditors: F-Stone
 */
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const PostsListItem = (props) => {
    useEffect(() => {
        console.log("Component Did Update");
    });
    return useMemo(() => {
        console.log("ItemRender");
        return (
            <article className="post-excerpt">
                <h3>{props.title}</h3>
                <p className="post-content">
                    {props.content.substring(0, 100)}
                </p>
                <Link to={`/posts/${props.id}`} className="button muted-button">
                    View Post
                </Link>
            </article>
        );
    }, [props.content, props.id, props.title]);
};
export const PostsList = () => {
    const posts = useSelector((state) => state.posts);

    const renderedPosts = posts.map((post) => (
        <PostsListItem
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
        />
    ));

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};
