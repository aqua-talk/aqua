import React, { useState, useEffect } from "react";

import { useHistory, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "./redux/actions/user_action";

import LoginPage from "./components/pages/LoginPage";
import MainPage from "./components/pages/MainPage";
import Loading from "./components/pages/Loading";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/login_info")
      .then((response) => {
        let data = response.data;
        if (data.user_info) {
          console.log("유저 정보 조회", data.user_info);
          dispatch(setUser(data.user_info));
        } else {
          console.log("유저 정보 없음", data);
          dispatch(clearUser());

          history.push("/login");
        }
      })
      .then(() => {
        history.push("/");
        setIsLoading(false);
      })
      .catch(function (error) {
        alert("유저 정보 요청 실패");
        history.push("/login");
      });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={isLoading ? Loading : MainPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
