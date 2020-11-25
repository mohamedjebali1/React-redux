import React from "react";
import "./App.css";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My Counter  </h1>
        <Counter />
      </div>
    </Provider>
  );
}
