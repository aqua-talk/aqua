import React, { useState } from "react";
import "./Login.css";

function Login() {
  return (
    <div className="LoginLayout">
      <form className="LoginForm">
        <input type="text"></input>
        <input type="password"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Login;
