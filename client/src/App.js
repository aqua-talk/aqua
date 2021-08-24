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

const domain = "http://www.aqua-talk.shop:3002";
const root = "/web";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/user_info")
      .then((response) => {
        let data = response.data;
        if (data.user_info.id) {
          console.log("유저 정보 조회", data.user_info);
          dispatch(setUser(data.user_info));
          setIsLoading(false);
          history.push(root);
        } else {
          console.log("유저 정보 없음", data);
          dispatch(clearUser());
          history.push(`${root}/login`);
        }
      })
      .catch(function (error) {
        alert("유저 정보 요청 실패");
        history.push(`${root}/login`);
      });
  }, []);

  const signOut = () => {
    console.log("로그아웃 성공");
    dispatch(clearUser());
    history.push(`${root}/login`);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path={`${root}/`}>
          {isLoading ? <Loading /> : <MainPage signOut={signOut} />}
        </Route>
        <Route path={`${root}/login`}>
          <LoginPage domain={domain} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
