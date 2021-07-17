import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import Reducer from "./context/Reducer";
import { initialState } from "./context/Reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={Reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
