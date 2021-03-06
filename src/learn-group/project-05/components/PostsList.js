/*
 * @Description: Posts List 组件
 * @Author: F-Stone
 * @Date: 2021-11-24 13:12:56
 * @LastEditTime: Thu Dec 09 2021 15:30:27
 * @LastEditors: F-Stone
 */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPosts, fetchPosts } from "../features/posts/postSlice";

import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";

let PostExcerpt = ({ post }) => {
    return (
        <article className="post-excerpt">
            <h3>{post.title}</h3>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`} className="button muted-button">
                View Post
            </Link>
        </article>
    );
};
PostExcerpt = React.memo(PostExcerpt);

export const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.error);

    useEffect(() => {
        if (postStatus === "idle") {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    let content;

    if (postStatus === "loading") {
        content = <div className="loader">Loading...</div>;
    } else if (postStatus === "succeeded") {
        const orderedPosts = posts
            .slice()
            .sort((a, b) => b.date.localeCompare(a.date));
        content = orderedPosts.map((post) => (
            <PostExcerpt key={post.id} post={post} />
        ));
    } else if (postStatus === "error") {
        content = <div>{error}</div>;
    }

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {content}
        </section>
    );
};
