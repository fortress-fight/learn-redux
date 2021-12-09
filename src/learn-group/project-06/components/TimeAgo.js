/*
 * @Description: 用于展示 Post 发布时间
 * @Author: F-Stone
 * @Date: 2021-11-29 15:59:17
 * @LastEditTime: 2021-11-29 16:12:24
 * @LastEditors: F-Stone
 */
import { formatDistanceToNow, parseISO } from 'date-fns';
import React from 'react'

export const TimeAgo = ({timestamp})  => {
    let timeAgo = "";
    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo =  `${timePeriod} ago`;
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
