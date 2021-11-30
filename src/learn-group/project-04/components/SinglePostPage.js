/*
 * @Description: Post 详情页面
 * @Author: F-Stone
 * @Date: 2021-11-24 15:02:14
 * @LastEditTime: 2021-11-30 13:48:09
 * @LastEditors: F-Stone
 */
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";
import { selectPostById } from "../features/posts/postSlice";

export const SinglePostPage = (props) => {
    let { postId } = useParams();

    const post = useSelector((state) => selectPostById(state, postId));

    if (!post) {
        return (
            <section>
                <h2>页面未找到</h2>
            </section>
        );
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
                <p className="post-content">{post.content}</p>
                <ReactionButtons post={post} />
                <Link to={`/editPost/${post.id}`} className="button">
                    编辑文章
                </Link>
            </article>
        </section>
    );
};
