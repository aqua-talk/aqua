import React, { useState } from "react";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Messenger from "./components/Messenger.js";
import "./App.css";

function App() {
  const [layout, setLayout] = useState("login"); // login: 로그인, register: 회원가입, messenger: 친구목록, 채팅목록

  let userInterface = null;
  switch (layout) {
    case "login":
      userInterface = <Login></Login>;
      break;

    case "register":
      userInterface = <Register></Register>;
      break;

    case "messenger":
      userInterface = <Messenger></Messenger>;
      break;

    default:
  }
  return <div className="App">{userInterface}</div>;
}

export default App;
