import React, { useState } from "react";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Messenger from "./components/Messenger.js";
import "./App.css";

function App() {
  console.log("------ function App 실행 ------");
  const [layout, setLayout] = useState("login"); // login: 로그인, register: 회원가입, messenger: 친구목록, 채팅목록
  const [user, setUser] = useState({ id: "", pw: "" });

  // 새로고침할때 로그인 정보가 없어지는 것을 방지
  // function localCheck() {
  //   let isSignedIn = localStorage.getItem("signedIn?");
  //   if (isSignedIn) {
  //     setLayout("messenger");
  //   } else {
  //     setLayout("login");
  //   }
  // }
  // localCheck();

  let userInterface = null;
  switch (layout) {
    case "login":
      userInterface = (
        <Login
          getUser={function (user) {
            setUser(user);
            // localStorage.setItem("signedIn?", true);
          }}
          changeUI={function (next) {
            switch (next) {
              case "register":
                setLayout("register");
                break;
              case "messenger":
                setLayout("messenger");
                break;
              default:
            }
          }}
        ></Login>
      );
      break;

    case "register":
      userInterface = <Register></Register>;
      break;

    case "messenger":
      userInterface = <Messenger user={user}></Messenger>;
      break;

    default:
  }
  return <div className="App">{userInterface}</div>;
}

export default App;
