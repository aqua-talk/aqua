import React from "react";
import { Button } from "react-bootstrap";

function LoginPage() {
  return (
    <div>
      <Button variant="primary" href="http://localhost:3002/auth/google">
        구글
      </Button>
    </div>
  );
}

export default LoginPage;
