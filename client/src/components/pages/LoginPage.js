import React from "react";

import axios from "axios";
import { Button } from "react-bootstrap";

function LoginPage(props) {
  return (
    <div>
      <Button href={"http://aqua-talk.shop:3002/auth/google"}>링크</Button>
      <Button
        variant="primary"
        onClick={() => {
          axios
            .get("/auth/google")
            .then(function (response) {
              console.log("로그인 성공", response);
            })
            .catch(function (error) {
              console.log("로그인 실패");
            });
        }}
      >
        구글
      </Button>
    </div>
  );
}

export default LoginPage;
