/*
 * @Description: Posts List 组件
 * @Author: F-Stone
 * @Date: 2021-11-24 13:12:56
 * @LastEditTime: 2021-11-30 17:17:41
 * @LastEditors: F-Stone
 */
import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPosts, fetchPosts } from "../features/posts/postSlice";

import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";

export const PostsListItem = (props) => {
    return useMemo(() => {
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
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.error);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch])
    
    let content;

    if (postStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (postStatus === "succeeded") {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        content = orderedPosts.map((post) => (
            <PostsListItem
                key={post.id}
                {...post}
            />
        ));
    } else if (postStatus === "error") {
        content = <div>{error}</div>
    }

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {content}
        </section>
    );
};
