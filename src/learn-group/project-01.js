/*
 * @Description: State 管理
 * @Author: F-Stone
 * @Date: 2021-11-23 19:03:43
 * @LastEditTime: 2021-11-23 19:26:53
 * @LastEditors: F-Stone
 */
import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1);
    }
    
    return (
        <React.StrictMode>
            Value: {counter} <button onClick={increment}>Increment</button>
        </React.StrictMode>
    );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
