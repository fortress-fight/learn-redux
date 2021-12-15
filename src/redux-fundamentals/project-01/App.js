/*
 * @Description:
 * @Author: F-Stone
 * @Date: 2021-12-14 19:41:29
 * @LastEditTime: 2021-12-15 14:09:10
 * @LastEditors: F-Stone
 */
import React from "react";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";

const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "counter/increment":
            return { ...state, value: state.value + 1 };

        case "counter/decrement":
            return { ...state, value: state.value - 1 };

        default:
            return state;
    }
}

const store = createStore(counterReducer);

function Counter() {
    const value = useSelector((state) => state.value);
    function incrementValue() {
        store.dispatch({ type: "counter/increment" });
    }
    function decrementValue() {
        store.dispatch({ type: "counter/decrement" });
    }
    function incrementIfOdd() {
        if (value % 2 !== 0) {
            store.dispatch({ type: "counter/increment" });
        }
    }
    function incrementAsync() {
        setTimeout(() => {
            store.dispatch({ type: "counter/increment" });
        }, 1000);
    }
    return (
        <p>
            Clicked: <span id="value">{value}</span> times
            <button id="increment" onClick={incrementValue}>
                +
            </button>
            <button id="decrement" onClick={decrementValue}>
                -
            </button>
            <button id="incrementIfOdd" onClick={incrementIfOdd}>
                Increment if odd
            </button>
            <button id="incrementAsync" onClick={incrementAsync}>
                Increment async
            </button>
        </p>
    );
}

export default function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Counter />
            </Provider>
        </React.Fragment>
    );
}
