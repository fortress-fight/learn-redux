/*
 * @Description: 功能按钮
 * @Author: F-Stone
 * @Date: 2021-11-29 18:49:37
 * @LastEditTime: 2021-11-29 19:24:47
 * @LastEditors: F-Stone
 */
import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../features/posts/postSlice";

const reactionEmoji = {
    thumbsUp: "👍",
    hooray: "🎉",
    heart: "❤️",
    rocket: "🚀",
    eyes: "👀",
};

export const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButton = Object.entries(reactionEmoji).map(
        ([name, emoji]) => {
            return (
                <button
                    className="muted-button reaction-button"
                    type="button"
                    key={name}
                    onClick={() => {
                        dispatch(
                            reactionAdded({
                                postId: post.id,
                                reaction: name,
                            })
                        );
                    }}
                >
                    {emoji} {post.reactions?.[name] ? post.reactions[name] : ""}
                </button>
            );
        }
    );

    return <div> {reactionButton} </div>;
};
