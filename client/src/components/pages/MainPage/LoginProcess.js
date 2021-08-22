import React, { useState } from "react";

import axios from "axios";
import { Redirect } from "react-router";

function LoginProcess() {
  const [isLoading, setIsLoading] = useState(true);
  axios
    .get("/session") //요청 주소 임시
    .then(function (response) {
      let data = response.data;
      if (data.issession) {
        // issession 임시
        console.log("세션 확인 성공", data);
        setIsLoading(false);
      } else {
        console.log("세션 확인 실패", data);
      }
    })
    .catch(function (error) {
      console.log("실패");
    });
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { isLogin: true }, // 좀더 연구
          }}
        />
      )}
    </div>
  );
}

export default LoginProcess;
