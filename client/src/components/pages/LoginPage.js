import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function LoginPage(props) {
  return (
    <div>
      {/* <Button variant="primary" href="http://localhost:3002/auth/google">
        구글
      </Button> */}

      <Button
        variant="primary"
        onClick={() => {
          axios
            .get("/auth/google")
            .then(function (response) {
              console.log("response");
              props.login(true);
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
