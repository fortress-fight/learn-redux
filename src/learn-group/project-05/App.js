/*
 * @Description: Project-02 Root 组件
 * @Author: F-Stone
 * @Date: 2021-11-24 13:21:09
 * @LastEditTime: 2021-12-08 19:46:53
 * @LastEditors: F-Stone
 */
import React from "react";
import { Provider } from "react-redux";
import { Routes, Route, HashRouter } from "react-router-dom";

import { PostsList } from "./components/PostsList";
import { AddPostForm } from "./components/AddPostForm";
import { store } from "./app/store";
import { SinglePostPage } from "./components/SinglePostPage";
import { Navbar } from "./components/Navbar";
import { EditPostForm } from "./components/EditPostForm";
import { fetchUsers } from "./features/users/usersSlice";
import { UserPage } from "./components/UserPage";
import { UsersList } from "./components/UsersList";
import { NotificationsList } from "./components/NotificationsList";

store.dispatch(fetchUsers());

export default function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <Navbar />
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
                        <Route path="/posts/:postId" element={<SinglePostPage />} />
                        <Route exact path="/editPost/:postId" element={<EditPostForm />} />
                        <Route exact path="/users" element={<UsersList />} />
                        <Route exact path="/users/:userId" element={<UserPage />} />
                        <Route exact path="/notifications" element={<NotificationsList />} />
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
