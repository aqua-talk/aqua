import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";


function LoginPage(props) {
  return (
    <div>

      <Button
        variant="primary"
        onClick={() => {
          axios
            .get("/auth/google")
            .then(function (response) {

              console.log("로그인 성공(loginprocess로)", response);
              //여기서 바로 redirect?

            })
            .catch(function (error) {
              console.log("실패");
            });
        }}
      >
        구글
      </Button>
    </div>
  );
}

export default LoginPage;
