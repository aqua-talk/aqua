import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LoginPage from "./components/pages/LoginPage";
import MainPage from "./components/pages/MainPage";

function App() {
  const [isLogin, setIsLogin] = useState(true); //임시로 true
  return (
    <div className="App">
      <Route exact path="/">
        {isLogin ? <MainPage /> : <LoginPage />}
      </Route>
    </div>
  );
}

export default App;
