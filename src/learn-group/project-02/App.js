/*
 * @Description: Project-02 Root 组件
 * @Author: F-Stone
 * @Date: 2021-11-24 13:21:09
 * @LastEditTime: 2021-11-24 14:00:07
 * @LastEditors: F-Stone
 */
import React from 'react'
import { Provider } from "react-redux"

import {PostsList}  from "./features/posts/PostsList";
import {AddPostForm} from "./features/posts/AddPostForm";
import {store} from  "./app/store";

export default function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <AddPostForm />
                <PostsList />
            </Provider>
        </React.Fragment>
    )
}
