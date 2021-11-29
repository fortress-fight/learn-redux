/*
 * @Description: Posts List 组件
 * @Author: F-Stone
 * @Date: 2021-11-24 13:12:56
 * @LastEditTime: 2021-11-29 18:41:28
 * @LastEditors: F-Stone
 */
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";

export const PostsListItem = (props) => {
    useEffect(() => {
        console.log("Component Did Update");
    });
    return useMemo(() => {
        console.log("ItemRender");
        return (
            <article className="post-excerpt">
                <h3>{props.title}</h3>
                <PostAuthor userId={props.user} />
                <TimeAgo timestamp={props.date} />
                <p className="post-content">
                    {props.content.substring(0, 100)}
                </p>
                <Link to={`/posts/${props.id}`} className="button muted-button">
                    View Post
                </Link>
            </article>
        );
    }, [props.content, props.date, props.id, props.title, props.user]);
};
export const PostsList = () => {
    const posts = useSelector((state) => state.posts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    const renderedPosts = orderedPosts.map((post) => (
        <PostsListItem
            key={post.id}
            {...post}
        />
    ));

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};
