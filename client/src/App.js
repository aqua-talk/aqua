import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LoginPage from "./components/pages/LoginPage";
import MainPage from "./components/pages/MainPage";

function App() {
  const [isLogin, setIsLogin] = useState(false); //임시로 true

  const login = (boolean) => {
    setIsLogin(boolean);
  };

  return (
    <div className="App">
      <Route exact path="/">
        {isLogin ? <MainPage /> : <LoginPage login={login} />}
      </Route>
    </div>
  );
}

export default App;
