/*
 * @Description: Project-02 Root 组件
 * @Author: F-Stone
 * @Date: 2021-11-24 13:21:09
 * @LastEditTime: 2021-11-24 20:13:21
 * @LastEditors: F-Stone
 */
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import { PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
import { store } from "./app/store";
import { SinglePostPage } from "./components/SinglePostPage";

export default function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="App">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <React.Fragment>
                                    <AddPostForm />
                                    <PostsList />
                                </React.Fragment>
                            }
                        />
                        <Route
                            path="/posts/:postId"
                            element={<SinglePostPage />}
                        />
                        <Route
                            path="*"
                            element={
                                <section>
                                    <h2>页面未找到</h2>
                                </section>
                            }
                        />
                    </Routes>
                </div>
            </HashRouter>
        </Provider>
    );
}
