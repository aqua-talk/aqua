
import React, { useState, useEffect } from "react";

import { Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LoginPage from "./components/pages/LoginPage";
import MainPage from "./components/pages/MainPage";
import LoginProcess from "./components/pages/MainPage/LoginProcess";


function App() {
  const [isLogin, setIsLogin] = useState(false); //임시로 true


  //useEffect 세션 확인하기

  const login = (boolean) => {
    setIsLogin(boolean);
  };

  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          {isLogin ? <MainPage /> : <LoginPage login={login} />}
        </Route>
        <Route path="/loginprocess">
          <LoginProcess />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
