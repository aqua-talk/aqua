import React, { useState } from "react";
import "./Login.css";

function Login(props) {
  console.log("------ function Login 실행 ------");
  return (
    <div className="loginLayout">
      <div className="loginLogo">Logo</div>
      <form
        className="loginForm"
        onSubmit={function (e) {
          e.preventDefault();
          let submittedId = e.target.userId.value.trim();
          let submittedPw = e.target.userPw.value;
          let submittedUser = { id: submittedId, pw: submittedPw };
          console.log(submittedUser);

          // 서버와 통신이 필요한 부분
          // submittedUser를 보내고 user의 정보와 success를 받아온다.
          let user = submittedUser; //임시로 user 정보를 입력한 정보로 설정
          let success = true; //임시로 success를 true로 설정

          if (success) {
            props.getUser(user);
            props.changeUI("messenger");
          } else {
            alert("account error");
          }
        }}
      >
        <input type="text" name="userId"></input>
        <input type="password" name="userPw"></input>
        <input type="submit" value="로그인"></input>
      </form>
      <nav>
        <ul className="accountMenu">
          <li>
            <a
              href="#"
              onClick={function (e) {
                e.preventDefault();
                props.changeUI("register");
              }}
            >
              회원가입
            </a>
          </li>
          <li>
            <a href="#">아이디 찾기</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Login;
