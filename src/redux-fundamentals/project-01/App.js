/*
 * @Description: 
 * @Author: F-Stone
 * @Date: 2021-12-14 19:41:29
 * @LastEditTime: 2021-12-14 19:52:40
 * @LastEditors: F-Stone
 */
import React from 'react'

import  { Provider, createStoreHook } from 'react-redux'

const store = createStoreHook();
console.log('store:', store)

export default function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                123321
            </Provider>
        </React.Fragment>
    )
}
