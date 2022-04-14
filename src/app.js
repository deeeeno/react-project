import React from "react";
import ReactDOM from "react-dom/client";
//import ReactDOM from "react-dom";
import App from "./component/App";

//this is react 17
//ReactDOM.render(<App />, document.getElementById("app"));
///what's new in react 18
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
//why this change made??
//react18에서 소개된 새로운 features, changes를 적용하기 위해서

//new hook
//batch state
//improved suspense
