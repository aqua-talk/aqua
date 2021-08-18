import React from "react";
import { Image } from "react-bootstrap";
import testProfileImage from "../../../../assets/images/testProfileImage.jpg";

function MyProfile() {
  let userName = "김현";
  let userStatusMessage = "test";
  return (
    <div style={{ padding: "10px 0" }}>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Image src={testProfileImage} width={50} roundedCircle />
        <div
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>{userName}</h4>
          {userStatusMessage && <p style={{ margin: 0 }}>{userStatusMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
